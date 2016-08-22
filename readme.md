# Testování aplikace

## Popis

Testování Reactu si ukážeme na jednoduché aplikaci nezvané Labeler (Štítkovač). Aplikace neumožňuje nic jiného než přidávání štítků. Obsahuje jedno pole pro zadání textu, odesílací tlačítko a seznam štítků, které byly v aplikaci přidány.

## Úkol 6

Otestujte *actions* a *reducers*

Inspirujte se na stránce Read Me Reduxu [Writing Tests]: http://redux.js.org/docs/recipes/WritingTests.html

Výsledek může vypadat takto:

```
AddLabelForm/actions                                             
  √ should create an action to change input value                
  √ should create an action to submit input label                
                                                                 
AddLabelForm/reducer                                             
  √ should return the initial state                              
  √ should handle action type CHANGE_ADD_LABEL_FORM_INPUT_VALUE  
  √ should clean state on action type SUBMIT_ADD_LABEL_FORM      
                                                                 
<AddLabelForm />                                                 
  √ input has "value" and "onChange" properties                  
  √ calls "onInputValueChange" on input change                   
  √ calls "onFormSubmit" on form submit                          
  √ fills input with value from "inputValue" property            
                                                                 
<Label label="bar" />                                            
  √ has class "label"                                            
  √ text is "bar"                                                
                                                                 
<Labels labels={['foo', 'bar']} />                               
  √ should contain two <Label />                                 
                                                                 
App/reducer.labels                                               
  √ should return the initial state as array                     
  √ should handle action type SUBMIT_ADD_LABEL_FORM              
                                                                 
<App />                                                          
  √ should contain <AddLabelForm /> components                   
  √ should contain <Labels /> components                         
                                                                 
                                                                 
16 passing (363ms)                                               
```
