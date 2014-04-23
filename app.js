Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'AM',
    appFolder: 'app',    
    controllers: [
                  'Users'
              ],              
              launch: function() {
                  Ext.create('Ext.container.Viewport', {
                      layout: 'fit',
                      items: {
                          xtype: 'userlist'
                      }
                  });
              }

});

//STEP 1 edycji pliku