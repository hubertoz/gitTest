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

<<<<<<< HEAD
//terst
=======
//STEP 3 edycji pliku  - branchowanie 

>>>>>>> 328c8162c70fec17dcf98aa2c61ffaa44e1ad29c
