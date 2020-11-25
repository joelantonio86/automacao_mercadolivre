import * as GETMoedas from '../requests/GETMoedas.request';

describe ('GET Moedas', () => {
    it ('Listar array de todas as moedas cadastradas', () =>{
        GETMoedas.allMoedas().should((response) => {
           expect(response.status).to.eq(200);
           expect(response.body).to.be.not.null;
        })
    });
});

describe ('GET Moeda', () => {
    it ('Listar moeda através do ID', () => {
        GETMoedas.allMoedas().then((resAllMoedas) => {
            cy.log(resAllMoedas.body['2'].id)
          
        })
    });
});

describe ('GET MoedaNegativa', () => {
    it ('Listar moeda através do ID que não esteja dentro do array ou não existente', () => {
        GETMoedas.allMoedas().then((resAllMoedas) => {
            cy.log(resAllMoedas.body[22].id)
          
        })
    });
});

