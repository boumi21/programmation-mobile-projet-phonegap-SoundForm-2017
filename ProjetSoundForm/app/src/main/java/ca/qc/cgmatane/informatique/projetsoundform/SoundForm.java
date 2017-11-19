package ca.qc.cgmatane.informatique.projetsoundform;

import android.os.Bundle;
import org.apache.cordova.*;

public class SoundForm extends DroidGap {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        super.init();
        super.loadUrl(Config.getStartUrl());
        super.loadUrl("file:///android_asset/www/index.html");
    }
}
