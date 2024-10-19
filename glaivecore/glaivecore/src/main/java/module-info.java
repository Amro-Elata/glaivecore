module glaivecore {
    requires javafx.controls;
    requires javafx.fxml;
    requires javafx.graphics;

    opens glaivecore to javafx.fxml;
    exports glaivecore;
}
