<template>
  <q-page class="row items-center justify-evenly">
    <q-form ref="formFicha" @submit.prevent="handleEnviar" @reset="handleReset">
      <q-card class="my-card">
        <q-card-section class="row items-center justify-between">
          <div class="text-h5">Solicitação de Emprego</div>
          <q-btn type="reset" color="positive" label="Limpar" />
        </q-card-section>
        <q-card-section>
          <DadosPessoais />
        </q-card-section>
        <q-card-section>
          <DadosFamiliares />
        </q-card-section>
        <q-card-section>
          <DadosFormacaoEscolarTecnica />
        </q-card-section>
        <q-card-section>
          <DadosInformacaoAdicional />
        </q-card-section>
        <q-card-section>
          <DadosAutorizacaoContratacao />
        </q-card-section>
        <q-card-actions align="center" class="q-pa-md">
          <q-btn
            no-caps
            class="q-px-md"
            type="submit"
            color="primary"
            :label="gerandoPDF ? 'Gerando...' : 'Gerar PDF'"
            @click="handleEnviar"
            :loading="gerandoPDF"
            :disable="gerandoPDF"
          />
        </q-card-actions>
      </q-card>
    </q-form>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useSolicitacaoEmpregoStore } from '../stores/SolicitacaoEmpregoStore';
import DadosPessoais from '../components/DadosPessoais.vue';
import DadosFamiliares from '../components/DadosFamiliares.vue';
import DadosFormacaoEscolarTecnica from '../components/DadosFormacaoEscolarTecnica.vue';
import DadosInformacaoAdicional from '../components/DadosInformacaoAdicional.vue';
import DadosAutorizacaoContratacao from '../components/DadosAutorizacaoContratacao.vue';
import { gerarFichaPDF } from '../helpers/gerarFichaPDF';
import { QForm, Notify } from 'quasar';

const store = useSolicitacaoEmpregoStore();
const gerandoPDF = ref(false);

const formFicha = ref<InstanceType<typeof QForm> | null>(null);

const handleEnviar = async () => {
  if (!formFicha.value) return;

  gerandoPDF.value = true;
  try {
    const isValid = await formFicha.value.validate();
    if (isValid) {
      gerarFichaPDF(store.solicitacao);
      Notify.create({
        type: 'positive',
        message: 'Formulário enviado com sucesso!',
      });
    } else {
      Notify.create({
        type: 'negative',
        message: 'Por favor, preencha todos os campos obrigatórios.',
      });
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      Notify.create({
        type: 'negative',
        message: `Ocorreu um erro ao validar o formulário: ${error.message}`,
      });
    } else {
      console.error('Erro desconhecido:', error);
    }
  } finally {
    gerandoPDF.value = false;
  }
};

const handleReset = () => {
  if (!formFicha.value) return;
  formFicha.value.resetValidation?.();

  store.clearSolicitacao();
};
</script>

<style scoped>
.q-page {
  padding: 20px;
}
.my-card {
  max-width: 1024px;
  margin: auto;
}
</style>
