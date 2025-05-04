import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import type { ISolicitacaoEmprego } from 'src/interfaces/SolicitacaoEmprego';
import type { TDocumentDefinitions } from 'pdfmake/interfaces';

pdfMake.vfs = pdfFonts.vfs;

export function gerarFichaPDF(dados: ISolicitacaoEmprego) {
  const yesNo = (val: boolean) => (val ? 'Sim' : 'Não');

  const docDefinition: TDocumentDefinitions = {
    content: [
      { text: 'FICHA DE SOLICITAÇÃO DE EMPREGO', style: 'header', alignment: 'center' },

      // Dados Pessoais
      { text: '\nDADOS PESSOAIS', style: 'subheader' },
      {
        columns: [
          { text: `Função Pretendida: ${dados.funcao_pretendida}` },
          { text: `Nome: ${dados.nome}` },
        ],
      },
      {
        columns: [
          { text: `Idade: ${dados.idade}` },
          { text: `Sexo: ${dados.sexo}` },
          { text: `CPF: ${dados.cpf}` },
        ],
      },
      {
        columns: [
          { text: `RG: ${dados.rg}` },
          { text: `Órgão Emissor: ${dados.orgao_emissor}` },
          { text: `Data Expedição: ${dados.data_expedicao}` },
        ],
      },
      {
        columns: [
          { text: `Naturalidade: ${dados.naturalidade}` },
          { text: `Nascimento: ${dados.data_nascimento}` },
        ],
      },
      {
        columns: [
          { text: `CTPS: ${dados.ctps}` },
          { text: `Série: ${dados.ctps_serie}` },
          { text: `PIS: ${dados.pis}` },
        ],
      },
      {
        columns: [
          { text: `Título Eleitor: ${dados.titulo_eleitor}` },
          { text: `Sessão: ${dados.sessao}` },
          { text: `Zona: ${dados.zona}` },
        ],
      },
      {
        columns: [
          { text: `Cor: ${dados.cor}` },
          { text: `Altura: ${dados.altura}` },
          { text: `Peso: ${dados.peso}` },
        ],
      },
      {
        columns: [
          { text: `Deficiente: ${yesNo(dados.deficiente)}` },
          { text: `Especificação: ${dados.deficiencia_especificacao}` },
        ],
      },
      {
        text: `Endereço: ${dados.endereco}, Nº ${dados.numero} - ${dados.bairro}, ${dados.cidade} - ${dados.uf}, CEP: ${dados.cep}`,
      },
      {
        columns: [
          { text: `Email: ${dados.email}` },
          { text: `Contato: ${dados.contato_particular}` },
          { text: `Recado: ${dados.contato_recado}` },
        ],
      },

      // Dados Familiares
      { text: '\nDADOS FAMILIARES', style: 'subheader' },
      {
        columns: [
          { text: `Estado Civil: ${dados.estado_civil}` },
          { text: `Nome da Mãe: ${dados.nome_mae}` },
          { text: `Nome do Pai: ${dados.nome_pai}` },
        ],
      },
      {
        columns: [
          { text: `Cônjuge: ${dados.nome_conjuge}` },
          { text: `CPF Cônjuge: ${dados.cpf_conjuge}` },
        ],
      },
      {
        text: `Filhos: ${dados.numero_filhos}`,
      },
      {
        ul: dados.filhos
          ? dados.filhos.map((f) => `Filho: ${f.nome} - Idade: ${f.idade} - CPF: ${f.cpf}`)
          : [],
      },

      // Formação
      { text: '\nFORMAÇÃO ESCOLAR/TÉCNICA', style: 'subheader' },
      {
        text: `Ensino Fundamental: ${yesNo(dados.ensino_fundamental)} | Médio: ${yesNo(dados.ensino_medio)} | Superior: ${yesNo(dados.ensino_superior)} - ${dados.ensino_superior_nivel}`,
      },
      {
        ul: dados.cursos
          ? dados.cursos.map(
              (c) =>
                `Curso: ${c.curso} - Conclusão: ${c.ano_conclusao ? c.ano_conclusao : 'Indefinido'}`,
            )
          : [],
      },

      // Info Adicionais
      { text: '\nINFORMAÇÕES ADICIONAIS', style: 'subheader' },
      {
        text: `Tamanho Camiseta: ${dados.tamanho_camiseta} | Vale Transporte: ${yesNo(dados.usa_vale_transporte)} - Qtde diária: ${dados.vale_transporte_quantidade_diaria}`,
      },
      {
        text: `Conta Sicredi: ${yesNo(dados.possui_conta_sicredi)} | Portabilidade: ${yesNo(dados.quer_portabilidade_sicredi)}`,
      },

      // Autorização
      { text: '\nAUTORIZAÇÃO DE CONTRATAÇÃO', style: 'subheader' },
      {
        text: `Apto ao trabalho: ${yesNo(dados.apto_trabalho)} | Exame: ${dados.data_exame}`,
      },
      {
        text: `Experiência: ${dados.periodo_experiencia} | Admissão: ${dados.data_admissao}`,
      },
      {
        text: `Salário: R$ ${dados.salario} | Função: ${dados.funcao} | Horário: ${dados.horario_trabalho}`,
      },
      {
        text: `Gerente Responsável: ${dados.gerente_responsavel} | Data: ${dados.data_formulario}`,
      },
    ],
    styles: {
      header: {
        fontSize: 16,
        bold: true,
      },
      subheader: {
        fontSize: 12,
        bold: true,
        margin: [0, 10, 0, 5],
      },
    },
  };

  pdfMake.createPdf(docDefinition).open();
}
