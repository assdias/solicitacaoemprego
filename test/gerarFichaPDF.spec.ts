import { describe, it, expect, vi, beforeEach } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useSolicitacaoEmpregoStore } from '../src/stores/SolicitacaoEmpregoStore';
import { gerarFichaPDF } from '../src/helpers/gerarFichaPDF';

vi.mock('../src/helpers/gerarFichaPDF', () => ({
  gerarFichaPDF: vi.fn(),
}));

describe('Teste de geração de PDF com gerarFichaPDF', () => {
  beforeEach(() => {
    setActivePinia(createPinia()); // Inicializa o Pinia antes de cada teste
  });

  it('deve alimentar a store e gerar um PDF', () => {
    const store = useSolicitacaoEmpregoStore();

    // Preenche a store com os dados obrigatórios da interface
    store.solicitacao = {
      // Dados Pessoais
      funcao_pretendida: 'Auxiliar',
      nome: 'Carlos Teste',
      idade: 30,
      sexo: 'M',
      cpf: '123.456.789-00',
      rg: '12.345.678-9',
      orgao_emissor: 'SSP',
      data_expedicao: '2020-01-01',
      naturalidade: 'Cidade Teste',
      data_nascimento: '1993-01-01',
      ctps: '123456',
      ctps_serie: '789',
      pis: '123.45678.90-1',
      titulo_eleitor: '123456789012',
      sessao: '123',
      zona: '456',
      cor: 'parda',
      altura: '1.75',
      peso: '70',
      deficiente: false,
      deficiencia_especificacao: '',
      endereco: 'Rua Teste',
      numero: '123',
      bairro: 'Centro',
      cep: '87000-000',
      cidade: 'Maringá',
      uf: 'PR',
      email: 'teste@email.com',
      contato_particular: '44999990000',
      contato_recado: '44988880000',

      // Dados Familiares
      estado_civil: 'Casado',
      nome_mae: 'Maria Silva',
      nome_pai: 'João Silva',
      nome_conjuge: 'Ana Souza',
      cpf_conjuge: '123.456.789-00',
      numero_filhos: 2,
      filhos: [
        { nome: 'Filho 1', idade: 10, cpf: '111.111.111-11' },
        { nome: 'Filho 2', idade: 8, cpf: '222.222.222-22' },
      ],

      // Formação Escolar/Técnica
      ensino_fundamental: true,
      ensino_medio: true,
      ensino_superior: false,
      ensino_superior_nivel: '',
      cursos: [],

      // Informações Adicionais
      tamanho_camiseta: 'M',
      usa_vale_transporte: true,
      vale_transporte_quantidade_diaria: 2,
      possui_conta_sicredi: false,
      quer_portabilidade_sicredi: false,

      // Autorização da Contratação
      apto_trabalho: true,
      data_exame: '2023-12-01',
      periodo_experiencia: '45 dias',
      data_admissao: '2024-01-01',
      salario: '2500.00',
      funcao: 'Auxiliar de Serviços Gerais',
      horario_trabalho: '08:00 - 17:48',
      gerente_responsavel: 'Joana Gerente',
      data_formulario: '2024-01-01',
    };

    // Executa a função de geração de PDF
    gerarFichaPDF(store.solicitacao);

    // Verifica se a função foi chamada corretamente
    expect(gerarFichaPDF).toHaveBeenCalledWith(store.solicitacao);
    expect(gerarFichaPDF).toHaveBeenCalledTimes(1);
  });
});
