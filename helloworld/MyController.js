
/**
 * TODO create a description
 * @class helloWorld.MyController
 * @extends aria.templates.ModuleCtrl
 */
Aria.classDefinition({
    $classpath : "helloWorld.MyController",
    $extends : "aria.templates.ModuleCtrl",
    $implements : ["helloWorld.IMyInterface"],
    $constructor : function () {                    
        this.$ModuleCtrl.constructor.call(this);
    },
    $destructor : function () {
        this.$ModuleCtrl.$destructor.call(this);
    },
    $prototype : {
        $publicInterfaceName : "helloWorld.IMyInterface"        
    }
});