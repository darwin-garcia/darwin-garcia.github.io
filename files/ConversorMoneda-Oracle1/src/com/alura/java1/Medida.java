package com.alura.java1;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.*;

public class Medida extends JFrame {
    String valorInicialMedida, valorFinalMedida;
    double resultado;
    String arregloConversion[] = {"", "Metro a Pulgada", "Metro a Pies", "Pulgadas a Centimetros", "Pulgadas a Metros", "Pulgadas a Pies", "Pies a Centimetro", "Pies a Metro", "Pies a Pulgadas"};
    public Medida(){
        super("Conversor de Medidas");
        getContentPane().setLayout(null);

        Label leyendaInicial = new Label("Digite el valor a convertir.", Label.CENTER);
        leyendaInicial.setForeground(Color.black);
        leyendaInicial.setBounds(20, 10, 150, 30);
        getContentPane().add(leyendaInicial);

        JTextField valorInicial = new JTextField(21);
        valorInicial.setBounds(30, 50, 360, 30);
        getContentPane().add(valorInicial);

        Label leyendaConversion = new Label("Seleccione el valor a convertir.");
        leyendaConversion.setForeground(Color.black);
        leyendaConversion.setBounds(20, 90, 250, 30);
        getContentPane().add(leyendaConversion);

        JComboBox opcionesMedida = new JComboBox(arregloConversion);
        opcionesMedida.setBounds(30,120,360,30);
        opcionesMedida.setEditable(true);
        getContentPane().add(opcionesMedida);

        Label leyendaFinal = new Label("Valor convertido:");
        leyendaFinal.setForeground(Color.black);
        leyendaFinal.setBounds(30,150,360,30);
        getContentPane().add(leyendaFinal);

        JTextField valorFinal = new JTextField(21);
        valorFinal.setBounds(30, 180, 360, 30);
        getContentPane().add(valorFinal);

        JButton ConversionMedida = new JButton("Convertir");
        ConversionMedida.setBounds(40,250,150,30);
        ConversionMedida.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                valorInicialMedida=valorInicial.getText();
                double valorIn = Double.parseDouble(valorInicialMedida);
                opcionesMedida.getSelectedIndex();
                if(valorIn<0){
                    JOptionPane.showMessageDialog(null,"No se pueden convertir valores inferiores a cero.");
                }
                else {
                    if(opcionesMedida.getSelectedIndex()==0){
                        JOptionPane.showMessageDialog(null,"Seleccione un valor a convertir en la casilla.");
                    }
                    else{
                        switch(opcionesMedida.getSelectedIndex()){
                            case 1: resultado=valorIn*39.37; break;
                            case 2: resultado=valorIn*3.28;break;
                            case 3: resultado=valorIn/0.393;break;
                            case 4: resultado=valorIn/39.37;break;
                            case 5: resultado=valorIn*0.0833333;break;
                            case 6: resultado=valorIn/0.0328;break;
                            case 7: resultado=valorIn/3.28;break;
                            case 8: resultado=valorIn*12;break;
                        }
                        valorFinalMedida=String.valueOf(resultado);
                        valorFinal.setText(valorFinalMedida);
                    }
                }
            }
        });
        JButton Regresar = new JButton("Regresar");
        Regresar.setBounds(220,250,150,30);
        Regresar.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                new Inicio();
                dispose();
            }
        });
        getContentPane().add(ConversionMedida);
        getContentPane().add(Regresar);
        setSize(420,360);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setVisible(true);
    }
}
