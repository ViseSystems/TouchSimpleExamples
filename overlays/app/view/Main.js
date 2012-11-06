/*
 * File: app/view/Main.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.1.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.Main', {
    extend: 'Ext.Container',

    config: {
        padding: 20,
        layout: {
            type: 'vbox'
        },
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: 'Overlays Demo',
                items: [
                    {
                        xtype: 'button',
                        itemId: 'settingsButton',
                        iconCls: 'settings',
                        iconMask: true
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        itemId: 'replyButton',
                        iconCls: 'reply',
                        iconMask: true
                    }
                ]
            },
            {
                xtype: 'button',
                itemId: 'mybutton2',
                text: 'Choose Two Numbers'
            },
            {
                xtype: 'spacer'
            },
            {
                xtype: 'component',
                html: 'This demo shows how you can use the different overlay widgets supported by Sencha Touch 2. The button at the top-left shows a Ext.Panel, the button at the top right shows a Ext.ActionSheet, and the button in the middle shows a Ext.picker.Picker.',
                itemId: 'description',
                style: 'color:#999'
            }
        ],
        listeners: [
            {
                fn: 'onSettingsButtonTap',
                event: 'tap',
                delegate: '#settingsButton'
            },
            {
                fn: 'onReplyButtonTap',
                event: 'tap',
                delegate: '#replyButton'
            },
            {
                fn: 'onMybutton2Tap',
                event: 'tap',
                delegate: '#mybutton2'
            }
        ]
    },

    onSettingsButtonTap: function(button, e, options) {
        var settings = button.settingsPanel;
        if (!settings) {
            settings = button.settingsPanel = Ext.widget('settings');
        }
        settings.showBy(button);
    },

    onReplyButtonTap: function(button, e, options) {
        var sheet = button.actionSheet;
        if (!sheet) {
            sheet = button.actionSheet = Ext.Viewport.add(Ext.widget('replyOptions'));
        }
        sheet.show();
    },

    onMybutton2Tap: function(button, e, options) {
        var picker = button.numberPicker;

        if (!picker) {
            picker = button.numberPicker = Ext.Viewport.add({
                xtype: 'numbersPicker',
                listeners: {
                    change: function(picker, values) {
                        var n1 = values.number1,
                            n2 = values.number2;
                        Ext.Msg.alert(
                        'Numbers Selected', 
                        'You chose the numbers ' + n1 + ' and ' + n2 + 
                        ', which add up to ' + (n1 + n2) + '.'
                        );
                    }
                }
            });
        }

        picker.setValue({
            number1: 1,
            number2: 1
        });

        picker.show();
    }

});