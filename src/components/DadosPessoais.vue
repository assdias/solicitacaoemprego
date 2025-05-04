<template>
  <q-card flat>
    <q-card-section>
      <div class="text-h6">Dados Pessoais</div>
    </q-card-section>

    <q-card-section class="q-gutter-y-md">
      <q-input
        filled
        v-model="solicitacao.funcao_pretendida"
        label="Função Pretendida"
        :rules="[(val) => !!val || 'Campo obrigatório']"
      />
      <q-input
        filled
        v-model="solicitacao.nome"
        label="Nome Completo"
        :rules="[(val) => !!val || 'Campo obrigatório']"
      />
      <q-input
        filled
        v-model="solicitacao.idade"
        type="number"
        label="Idade"
        :rules="[
          (val) => !!val || 'Campo obrigatório',
          (val) => (val >= 18 && val <= 70) || 'Idade deve ser entre 18 e 70 anos',
        ]"
      />

      <div>
        <span>Sexo:</span>
        <q-radio filled v-model="solicitacao.sexo" val="F" label="F" />
        <q-radio filled v-model="solicitacao.sexo" val="M" label="M" />
      </div>

      <q-input
        filled
        v-model="solicitacao.cpf"
        label="CPF"
        mask="###.###.###-##"
        :rules="[(val) => !!val || 'Campo obrigatório']"
      />
      <q-input
        filled
        v-model="solicitacao.rg"
        label="RG"
        :rules="[(val) => !!val || 'Campo obrigatório']"
      />
      <q-input filled v-model="solicitacao.orgao_emissor" label="Órgão Emissor" />
      <q-input filled v-model="solicitacao.data_expedicao" type="date" label="Data da Expedição" />
      <q-input
        filled
        v-model="solicitacao.naturalidade"
        label="Naturalidade"
        :rules="[(val) => !!val || 'Campo obrigatório']"
      />
      <q-input
        filled
        v-model="solicitacao.data_nascimento"
        type="date"
        label="Data de Nascimento"
        :rules="[(val) => !!val || 'Campo obrigatório']"
      />
      <q-input filled v-model="solicitacao.ctps" label="CTPS nº" />
      <q-input filled v-model="solicitacao.ctps_serie" label="Série" />
      <q-input filled v-model="solicitacao.pis" label="PIS" />
      <q-input filled v-model="solicitacao.titulo_eleitor" label="Título de Eleitor nº" />
      <q-input filled v-model="solicitacao.sessao" label="Sessão" />
      <q-input filled v-model="solicitacao.zona" label="Zona" />

      <div>
        <span>Cor:</span>
        <q-select
          filled
          v-model="solicitacao.cor"
          :options="['Parda', 'Branca', 'Preta', 'Indígena', 'Amarela']"
        />
      </div>

      <q-input filled v-model="solicitacao.altura" label="Altura (cm)" mask="#,##" />
      <q-input filled v-model="solicitacao.peso" label="Peso (kg)" mask="#,###" />

      <div>
        <span>Deficiente:</span>
        <q-radio filled v-model="solicitacao.deficiente" :val="true" label="Sim" />
        <q-radio filled v-model="solicitacao.deficiente" :val="false" label="Não" />
      </div>

      <q-input
        filled
        v-model="solicitacao.deficiencia_especificacao"
        label="Especifique (se deficiente)"
        v-if="isDeficiente"
      />

      <q-input
        filled
        v-model="solicitacao.endereco"
        label="Endereço"
        :rules="[(val) => !!val || 'Campo obrigatório']"
      />
      <q-input filled v-model="solicitacao.numero" label="Nº" />
      <q-input
        filled
        v-model="solicitacao.bairro"
        label="Bairro"
        :rules="[(val) => !!val || 'Campo obrigatório']"
      />
      <q-input
        filled
        v-model="solicitacao.cep"
        mask="#####-###"
        label="CEP"
        :rules="[(val) => !!val || 'Campo obrigatório']"
      />
      <q-input
        filled
        v-model="solicitacao.cidade"
        label="Cidade"
        :rules="[(val) => !!val || 'Campo obrigatório']"
      />
      <q-select
        filled
        v-model="solicitacao.uf"
        :options="UFOptions"
        label="UF"
        :rules="[(val) => !!val || 'Campo obrigatório']"
      />
      <q-input filled v-model="solicitacao.email" type="email" label="Email" />
      <q-input
        filled
        v-model="solicitacao.contato_particular"
        type="tel"
        label="Contato Particular"
      />
      <q-input filled v-model="solicitacao.contato_recado" type="tel" label="Contato para Recado" />
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useSolicitacaoEmpregoStore } from '../stores/SolicitacaoEmpregoStore';

const store = useSolicitacaoEmpregoStore();
const solicitacao = store.solicitacao;
const isDeficiente = computed(() => solicitacao.deficiente == true);

const UFOptions = [
  'AC',
  'AL',
  'AP',
  'AM',
  'BA',
  'CE',
  'DF',
  'ES',
  'GO',
  'MA',
  'MT',
  'MS',
  'MG',
  'PA',
  'PB',
  'PR',
  'PE',
  'PI',
  'RJ',
  'RN',
  'RS',
  'RO',
  'RR',
  'SC',
  'SP',
  'SE',
  'TO',
];
</script>

<style scoped>
.q-card {
  max-width: 600px;
  margin: auto;
}
</style>
