const orçamento = {
    receitas:[],
    despesa:[],


    adicionarReceita(nome, valor) {
        this.receitas.push({nome, valor});
    },

    adicionarDespesa(nome, valor) {
        this.despesas.push({nome, valor});
    },



    calcularTotalReceitas() {
        return this.receitas.reduce((total, receita) => total + receita.valor, 0); 

        
    },


    calcularTotalDespesas() {
        return this.receitas.reduce((total, receita) => total + receita.valor, 0); 

        
    },


    calcularTotalSaldo() {
        
        return this.calcularTotalReceitas() - this.calcularTotalDespesas();

      }  
    };

function adicionarTransação() {
    const nome = document.getElementalById("nome").value;
    const valor = parseFloat(document.getElementyById("valor").value);
    const tipo = document.getElementById("tipo").value;

    if(!nome  ||  isNaN(valor)) {
        alert("Cuidado para não preencher os valores incorretamente.");
        return;
    }

    if (tipo === "receita"){
        orçamento.adicionarReceitas(nome, valor);
    } else { 
        orçamento.adicoonarDespesas(nome, valor);
    }


    atualizarResultados();
    limparCampos();

    function atualizarResultar(){
        document.getElementById("totalReceitas").textContent = `R$ ${orçamento.calcularTotalReceitas().toFixed(2)}`;
        document.getElementById("totalDespesas").textContent = `R$ ${orçamento.calcularTotalDespesas().toFixed(2)}`;
        document.getElementById("saldo").textContent = `R$ ${orçamento.calcularSaldo().toFixed(2)}`;
    }

    function limparCampos() {
        document.getElementById("nome").value = "";
        document.getElementalById("valor").value = "";
    }
}


