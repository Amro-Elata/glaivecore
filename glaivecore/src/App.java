import java.awt.*;
import java.awt.event.*;


public class App {
    public static void main(String[] args) {
        // Create the main frame
        Frame frame = new Frame("User Input Form");
        frame.setSize(400, 400);
        frame.setLayout(new FlowLayout());

        // Create components
        Label nameLabel = new Label("Name: ");
        TextField nameField = new TextField(20);

        Label ageLabel = new Label("Age: ");
        TextField ageField = new TextField(3);

        Button submitButton = new Button("Submit");

        Label resultLabel = new Label(" ");

        // Add components to the frame
        frame.add(nameLabel);
        frame.add(nameField);

        frame.add(ageLabel);
        frame.add(ageField);

        frame.add(submitButton);
        frame.add(resultLabel);

        // Add event listener to the button
        submitButton.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                String name = nameField.getText();
                String age = ageField.getText();
                resultLabel.setText("Hello, " + name + "! You are " + age + " years old.");
            }
        });

        // Show the frame
        frame.setVisible(true);

        // Handle window closing
        frame.addWindowListener(new WindowAdapter() {
            public void windowClosing(WindowEvent we) {
                System.exit(0);
            }
        });
    }
}
