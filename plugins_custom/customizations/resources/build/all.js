angular.module('branding', [
    'core',
]);

angular.module('branding').run(function (customization) {
    customization.plugins.core.startupURL = '/view/settings';
    customization.plugins.core.bodyClass = 'customized';
    customization.plugins.core.title = 'Lipsum 9000';
    customization.plugins.core.faviconURL = '/resources/customizations/resources/img/favicon.png';
    customization.plugins.core.logoURL = '/resources/customizations/resources/img/logo-small.png';
    customization.plugins.core.bigLogoURL = '/resources/customizations/resources/img/logo-full.png';
    customization.plugins.core.hidePersonaLogin = true;

    //customization.plugins.settings.hideMachineSettings = true;
    //customization.plugins.settings.hideMachineName = true;
    customization.plugins.settings.hideMachineColor = true;

    //customization.plugins.settings.hideBindingSettings = true;
    //customization.plugins.settings.hideAuthSettings = true;
    
    //customization.plugins.settings.hideSSLSettings = true;
    //customization.plugins.settings.hideSSLClientAuthSettings = true;

});

