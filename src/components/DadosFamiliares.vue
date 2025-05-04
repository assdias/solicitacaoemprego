<template>
  <q-card flat>
    <q-card-section>
      <div class="text-h6">Dados Familiares</div>
    </q-card-section>

    <q-card-section class="q-gutter-y-md">
      <q-select
        filled
        v-model="solicitacao.estado_civil"
        :options="['Solteiro', 'Casado', 'Divorciado', 'Viúvo']"
        label="Estado Civil"
      />
      <q-input filled v-model="solicitacao.nome_mae" label="Nome da Mãe" />
      <q-input filled v-model="solicitacao.nome_pai" label="Nome do Pai" />
      <q-input filled v-model="solicitacao.nome_conjuge" label="Nome do Cônjuge" />
      <q-input
        filled
        v-model="solicitacao.cpf_conjuge"
        label="CPF do Cônjuge"
        mask="###.###.###-##"
      />
      <q-input
        filled
        v-model="solicitacao.numero_filhos"
        type="number"
        label="Quantidade de Filhos"
        disable
      />

      <q-list v-for="(item, index) in solicitacao.filhos" :key="index">
        <q-item class="q-pa-none">
          <q-item-section>
            <q-input filled v-model="item.nome" label="Nome do Filho" />
          </q-item-section>
          <q-item-section>
            <q-input filled v-model="item.idade" type="number" label="Idade" />
          </q-item-section>
          <q-item-section>
            <q-input filled v-model="item.cpf" label="CPF do Filho" mask="###.###.###-##" />
          </q-item-section>
          <q-item-section side>
            <q-btn
              dense
              @click="delFilho(index)"
              color="negative"
              icon="delete"
              data-testid="remover-filho"
            />
          </q-item-section>
        </q-item>
      </q-list>
      <div class="justify-center items-center q-mt-md">
        <q-btn
          @click="addFilho"
          color="primary"
          label="Adicionar Filho"
          data-testid="adicionar-filho"
        />
      </div>
    </q-card-section>
  </q-card>
</template>

// DadosFamiliares.vue

<script setup lang="ts">
import { useSolicitacaoEmpregoStore } from '../stores/SolicitacaoEmpregoStore';

const store = useSolicitacaoEmpregoStore();
const solicitacao = store.solicitacao;

// Inicializa filhos como um array vazio se estiver indefinido
if (!solicitacao.filhos) {
  solicitacao.filhos = [];
}

const addFilho = () => {
  solicitacao.filhos.push({ nome: '', idade: 0, cpf: '' });
  solicitacao.numero_filhos = solicitacao.filhos.length;
};

const delFilho = (index: number) => {
  solicitacao.filhos.splice(index, 1);
  solicitacao.numero_filhos = solicitacao.filhos.length;
};
</script>

<style scoped>
.q-card {
  max-width: 600px;
  margin: auto;
}
</style>
