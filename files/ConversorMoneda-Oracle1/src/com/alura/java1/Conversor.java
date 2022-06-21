package com.alura.java1;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.*;

public class Conversor extends JFrame{
    String valorInicialMoneda, valorFinalMoneda;
    double resultado;
    int numeroConv, pos=0;
    String arregloConversion[] = {"","Dolar a Peso Colombiano", "Euro a Peso Colombiano", "Libra Esterlina a Peso Colombiano", "Yen a Peso Colombiano", "Won a Peso Colombiano", "Peso Mexicano a Peso Colombiano", "Peso Chileno a Peso Colombiano", "Peso Argentino a Peso Colombiano", "Peso Colombiano a Dolar", "Peso Colombiano a Euro", "Peso Colombiano a Libra Esterlina", "Peso Colombiano a Yen", "Peso Colombiano a Won" };
    public Conversor(){
        /* Titulo de la ventana */
        super("Conversor de Moneda");
        getContentPane().setLayout(null);
        /* Etiqueta de texto principal */
        Label leyendaInicial = new Label("Digite el valor a convertir.", Label.CENTER);
        leyendaInicial.setForeground(Color.black);
        leyendaInicial.setBounds(20, 20, 150, 30);
        getContentPane().add(leyendaInicial);
        /* Campo de Texto de Valores a Ingresar*/
        JTextField valorInicial = new JTextField(21);
        valorInicial.setBounds(30, 50, 360, 30);
        getContentPane().add(valorInicial);
        /* Etiqueta de Texto */
        Label leyendaConversion = new Label("Seleccione el valor a convertir.");
        leyendaConversion.setForeground(Color.black);
        leyendaConversion.setBounds(23, 90, 250, 30);
        getContentPane().add(leyendaConversion);
        /* Opciones (Select) Puede usar Choice (necesita el for) o JComboBox (trae el arreglo directamente) */
        JComboBox opcionesMoneda = new JComboBox(arregloConversion);
        opcionesMoneda.setBounds(30,120,360,30);
        opcionesMoneda.setEditable(true);
        getContentPane().add(opcionesMoneda);
        /* Etiqueta de Texto */
        Label leyendaFinal = new Label("Valor convertido:");
        leyendaFinal.setForeground(Color.black);
        leyendaFinal.setBounds(30,150,360,30);
        getContentPane().add(leyendaFinal);
        /* Campo de Texto de Valores a Mostrar despues de la conversion */
        JTextField valorFinal = new JTextField(21);
        valorFinal.setBounds(30, 180, 360, 30);
        getContentPane().add(valorFinal);
        /* Boton que realiza la conversion */
        JButton ConversionMoneda = new JButton("Convertir");
        ConversionMoneda.setBounds(40,250,150,30);
        ConversionMoneda.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                valorInicialMoneda=valorInicial.getText();
                double valorIn = Double.parseDouble(valorInicialMoneda);
                opcionesMoneda.getSelectedIndex();
                if(valorIn<0){
                    JOptionPane.showMessageDialog(null,"No se pueden convertir valores inferiores a cero.");
                }
                else{
                    if(opcionesMoneda.getSelectedIndex()==0){
                        JOptionPane.showMessageDialog(null,"Seleccione un valor a convertir en la casilla.");
                    }
                    else{
                        switch(opcionesMoneda.getSelectedIndex()){
                            case 1: resultado=valorIn/0.000257; break;
                            case 2: resultado=valorIn/0.0002435;break;
                            case 3: resultado=valorIn/0.000207;break;
                            case 4: resultado=valorIn/0.033;break;
                            case 5: resultado=valorIn/0.33;break;
                            case 6: resultado=valorIn/0.00531;break;
                            case 7: resultado=valorIn/0.22;break;
                            case 8: resultado=valorIn/0.0032;break;
                            case 9: resultado=valorIn*0.000257;break;
                            case 10: resultado=valorIn*0.0002435;break;
                            case 11: resultado=valorIn*0.000207;break;
                            case 12: resultado=valorIn*0.033;break;
                            case 13: resultado=valorIn*0.33;break;
                        }
                        valorFinalMoneda=String.valueOf(resultado);
                        valorFinal.setText(valorFinalMoneda);
                    }
                }
            }
        });
        /* Boton de regreso al menu principal */
        JButton Regresar = new JButton("Regresar");
        Regresar.setBounds(220,250,150,30);
        Regresar.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                new Inicio();
                dispose();
            }
        });
        getContentPane().add(ConversionMoneda);
        getContentPane().add(Regresar);
        setSize(420,360);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setVisible(true);
    }
}
