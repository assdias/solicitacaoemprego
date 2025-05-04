<template>
  <q-card flat>
    <q-card-section>
      <div class="text-h6">Formação Escolar/Técnica</div>
    </q-card-section>

    <q-card-section class="q-gutter-y-md">
      <q-checkbox filled v-model="solicitacao.ensino_fundamental" label="Ensino Fundamental" />
      <q-checkbox filled v-model="solicitacao.ensino_medio" label="Ensino Médio" />

      <div>
        <q-checkbox filled v-model="solicitacao.ensino_superior" label="Ensino Superior" />
        <q-select
          filled
          v-model="solicitacao.ensino_superior_nivel"
          :options="ensinoSuperiorOptions"
          v-if="solicitacao.ensino_superior"
        />
      </div>

      <q-list v-for="(curso, index) in solicitacao.cursos" :key="index" class="q-mb-md">
        <q-item>
          <q-item-section>
            <q-input filled v-model="curso.curso" label="Curso" />
          </q-item-section>
          <q-item-section>
            <q-input filled v-model="curso.ano_conclusao" type="number" label="Ano de Conclusão" />
          </q-item-section>
          <q-item-section side>
            <q-btn dense @click="removeCurso(index)" color="negative" icon="delete" />
          </q-item-section>
        </q-item>
      </q-list>

      <q-btn @click="addCurso" color="primary" label="Adicionar Curso" />
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { useSolicitacaoEmpregoStore } from '../stores/SolicitacaoEmpregoStore';

const store = useSolicitacaoEmpregoStore();
const solicitacao = store.solicitacao;

const addCurso = () => {
  if (!solicitacao.cursos) {
    solicitacao.cursos = [];
  }
  solicitacao.cursos.push({ curso: '', ano_conclusao: null });
};

const removeCurso = (index: number) => {
  solicitacao.cursos.splice(index, 1);
};

const ensinoSuperiorOptions = [
  { label: 'Completo', value: 'Completo' },
  { label: 'Incompleto', value: 'Incompleto' },
];
</script>

<style scoped>
.q-card {
  max-width: 600px;
  margin: auto;
}
</style>
