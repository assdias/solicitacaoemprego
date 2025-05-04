<template>
  <q-card flat>
    <q-card-section>
      <div class="text-h6">Autorização da Contratação</div>
    </q-card-section>

    <q-card-section class="q-gutter-y-md">
      <div>
        <span>Apto ao trabalho:</span>
        <q-radio filled v-model="solicitacao.apto_trabalho" :val="true" label="Sim" />
        <q-radio filled v-model="solicitacao.apto_trabalho" :val="false" label="Não" />
      </div>

      <q-input filled v-model="solicitacao.data_exame" type="date" label="Data do exame" />
      <q-input filled v-model="solicitacao.periodo_experiencia" label="Período de experiência" />
      <q-input filled v-model="solicitacao.data_admissao" type="date" label="Data de admissão" />
      <q-input filled v-model="solicitacao.salario" label="Salário" prefix="R$" />
      <q-input filled v-model="solicitacao.funcao" label="Função" />
      <q-input filled v-model="solicitacao.horario_trabalho" label="Horário de trabalho" />
      <q-input filled v-model="solicitacao.gerente_responsavel" label="Gerente responsável" />
      <q-input
        filled
        v-model="solicitacao.data_formulario"
        type="date"
        label="Data (preenchimento do formulário)"
      />
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { useSolicitacaoEmpregoStore } from '../stores/SolicitacaoEmpregoStore';

const store = useSolicitacaoEmpregoStore();
const solicitacao = store.solicitacao;
</script>

<style scoped>
.q-card {
  max-width: 600px;
  margin: auto;
}
</style>
