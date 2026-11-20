/* ISADORA — XV ANOS | CONFIGURAÇÃO PARA GITHUB PAGES
   As artes em assets/ já estão convertidas para WebP.
   Use ?editor=1 para ajustar áreas de clique, copiar o código e atualizar este arquivo.
   DADOS QUE AINDA FALTAM: WhatsApp de confirmação e link real do endereço.
   A opção "Dinheiro ou Pix" na arte é informativa: não há chave Pix fornecida. */
window.CONFIG = {
  nome: "Isadora — XV anos",
  whatsapp: {
    numero: "+555181086566", // PREENCHER com DDI+DDD+numero do responsável (ex: 55...)
    mensagem: "Olá! Gostaria de confirmar minha presença na festa de 15 anos da Isadora, em 19/12/2026, às 21h."
  },
  mapa: "https://maps.app.goo.gl/7u8vWhQiNzzg65jL8", // PREENCHER com a URL https://... do local da festa
  contatoCriador: {
    numero: "+5588988692212", // Contato Pedro Vieira presente no ZIP original: CONFIRMAR
    mensagem: "Olá, Pedro Vieira! Gostei do convite digital da Isadora e quero saber mais sobre um convite personalizado."
  },
  telas: {
    video: true, // Ativar apenas depois de enviar assets/video.mp4 (H.264)
    whatsapp: true,
    localizacao: true,
    presentes: true,
    dresscode: true,
    manual: true,
    contagem: false
  },
  pix: {
    ativo: false, // A imagem oferece "Dinheiro ou Pix", mas não exibe botão de copiar
    chave: "",
    posicao: {left: 22, top: 75, width: 56, height: 5}
  },
  info: { ativo: true, posicao: {left: 70.1, top: 88.0, width: 20.4, height: 4.8} },
  textos: {
    abrir: "Abrir convite",
    pularVideo: "Pular vídeo",
    voltar: "Voltar",
    ativarMusica: "Ativar música"
  },
  tema: {
    cor: "#b5d7ed",
    corBotaoVoltar: "transparent",
    corTextoBotaoVoltar: "transparent"
  },
  botoesVoltar: {
    presentes: { mostrarTexto: false, posicao: {left: 23.1, top: 90.9, width: 53.4, height: 4.8} },
    dresscode: { mostrarTexto: false, posicao: {left: 17.0, top: 86.7, width: 65.3, height: 7.0} },
    manual: { mostrarTexto: false, posicao: {left: 17.0, top: 86.8, width: 65.3, height: 7.0} }
  },
  hotspots: {
    confirm: {left: 6.5, top: 56.9, width: 27.1, height: 15.3},
    map: {left: 36.4, top: 56.9, width: 27.1, height: 15.3},
    gift: {left: 66.5, top: 56.9, width: 27.1, height: 15.3},
    dress: {left: 21.3, top: 70.7, width: 27.1, height: 15.1},
    manual: {left: 51.2, top: 70.7, width: 27.1, height: 15.1}
  },
  contagem: {
    dataEvento: "2026-12-19T21:00:00",
    textoFinal: "A festa começou!",
    corNumero: "#0b3451", corLegenda: "#0b3451",
    posicao: {left: 22, top: 48, width: 56, height: 6}
  },
  musica: {volume: 0.50}
};
