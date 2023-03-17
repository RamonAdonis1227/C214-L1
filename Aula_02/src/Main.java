public class Main {
    public static void main(String[] args) {

        Veiculo automovel1 = new Veiculo();
        Veiculo automovel2 = new Veiculo("CRS2017",2017);
        Caminhao automovel3 = new Caminhao("CRS2018", 2018, 5);
        Onibus automovel4 = new Onibus("CRS2016", 2016, 31);
        Caminhao automovel5 = new Caminhao("CRS2013", 2013, 2);

        automovel1.setPlaca("CRS2008");
        automovel1.setAno(2008);

        automovel1.exibirDados();
        automovel2.exibirDados();
        automovel3.exibirDados();
        automovel4.exibirDados();
        automovel5.exibirDados();


    }
}