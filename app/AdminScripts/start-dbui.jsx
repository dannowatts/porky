﻿function shell(cmd) {    var call ='do shell script "'+        cmd.replace(/\\/g,"\\\\").replace(/"/g,'\\"')+        '"';    return app.doScript(call,    ScriptLanguage.APPLESCRIPT_LANGUAGE);}shell('php DBUI-2.0.php');