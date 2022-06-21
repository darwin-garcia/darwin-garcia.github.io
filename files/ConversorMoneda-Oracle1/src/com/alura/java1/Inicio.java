package com.alura.java1;
import java.awt.Color;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPasswordField;
import javax.swing.JTextField;
public class Inicio extends JFrame {


    public static void main(String[]args){
        new Inicio();
    }
    public Inicio(){
        super("Menu principal de conversion");
        getContentPane().setLayout(null);
        getContentPane().setBackground(Color.white);
        JLabel bienvenida = new JLabel("Bienvenido a Conversiones.");
        bienvenida.setBounds(40,40,350,100);
        bienvenida.setForeground(Color.BLACK);
        getContentPane().add(bienvenida);

        JLabel credito = new JLabel("Creado por Darwin Garcia. (Colombia)");
        credito.setBounds(40,220,350,50);
        credito.setForeground(Color.BLACK);
        getContentPane().add(credito);

        JButton botonMoneda = new JButton("Conversor de Moneda");
        botonMoneda.setBounds(40,150,350,30);
        botonMoneda.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                new Conversor();
                dispose();
            }
        });
        JButton botonMedida = new JButton("Conversor de Medidas");
        botonMedida.setBounds(40,200,350,30);
        botonMedida.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                new Medida();
                dispose();
            }
        });
        getContentPane().add(botonMoneda);
        getContentPane().add(botonMedida);
        setSize(450,300);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setVisible(true);
    }
}
