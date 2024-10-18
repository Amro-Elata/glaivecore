import java.awt.*;
import java.awt.event.*;
import javax.swing.*;

import javafx.application.Platform;
import javafx.embed.swing.JFXPanel;
import javafx.scene.Scene;
import javafx.scene.media.Media;
import javafx.scene.media.MediaPlayer;
import javafx.scene.media.MediaView;
import javafx.scene.layout.StackPane;

public class App {
    public static void main(String[] args) {
        // Create the main frame
        Frame frame = new Frame("glaivecore");
        frame.setLayout(new FlowLayout());
        frame.setBackground(Color.GRAY);
        frame.setMinimumSize(new Dimension(720, 480));

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

        // Add JFXPanel to embed JavaFX into AWT
        JFXPanel jfxPanel = new JFXPanel();
        jfxPanel.setPreferredSize(new Dimension(640, 360));
        frame.add(jfxPanel);

        // Initialize JavaFX in the Swing/AWT thread
        Platform.runLater(() -> {
            // Create a scene with a MediaView
            StackPane root = new StackPane();

            // Replace this path with the path to your video file
            String videoPath = "file:/path/to/your/video.mp4";
            Media media = new Media(videoPath);
            MediaPlayer mediaPlayer = new MediaPlayer(media);
            MediaView mediaView = new MediaView(mediaPlayer);

            root.getChildren().add(mediaView);

            Scene scene = new Scene(root, 640, 360);
            jfxPanel.setScene(scene);

            // Play the video
            mediaPlayer.play();
        });

        // Show the frame
        frame.pack();
        frame.setVisible(true);

        // Handle window closing
        frame.addWindowListener(new WindowAdapter() {
            public void windowClosing(WindowEvent we) {
                System.exit(0);
            }
        });
    }
}
