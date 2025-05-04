<template>
  <q-card flat>
    <q-card-section>
      <div class="text-h6">Informações Adicionais</div>
    </q-card-section>

    <q-card-section class="q-gutter-y-md">
      <div>
        <span>Tamanho da Camiseta:</span>
        <q-radio filled v-model="solicitacao.tamanho_camiseta" val="P" label="P" />
        <q-radio filled v-model="solicitacao.tamanho_camiseta" val="M" label="M" />
        <q-radio filled v-model="solicitacao.tamanho_camiseta" val="G" label="G" />
        <q-radio filled v-model="solicitacao.tamanho_camiseta" val="GG" label="GG" />
      </div>

      <div>
        <span>Vai utilizar vale transporte?</span>
        <q-radio filled v-model="solicitacao.usa_vale_transporte" :val="true" label="Sim" />
        <q-radio filled v-model="solicitacao.usa_vale_transporte" :val="false" label="Não" />
      </div>

      <q-input
        filled
        v-model="solicitacao.vale_transporte_quantidade_diaria"
        type="number"
        label="Quantidade diária de VT"
        v-if="solicitacao.usa_vale_transporte"
      />

      <div>
        <span>Possui conta no Banco Sicredi?</span>
        <q-radio filled v-model="solicitacao.possui_conta_sicredi" :val="true" label="Sim" />
        <q-radio filled v-model="solicitacao.possui_conta_sicredi" :val="false" label="Não" />
      </div>

      <div>
        <span>Interesse em portabilidade salário para o Banco Sicred?</span>
        <q-radio filled v-model="solicitacao.quer_portabilidade_sicredi" :val="true" label="Sim" />
        <q-radio filled v-model="solicitacao.quer_portabilidade_sicredi" :val="false" label="Não" />
      </div>
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
