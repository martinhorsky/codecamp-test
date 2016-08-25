# Testování aplikace

## Popis

Testování Reactu si ukážeme na jednoduché aplikaci nezvané Labeler (Štítkovač). Aplikace neumožňuje nic jiného než přidávání štítků. Obsahuje jedno pole pro zadání textu, odesílací tlačítko a seznam štítků, které byly v aplikaci přidány.

## Úkol 3

Vytvořte testy dalších React komponent. Inspirací může být následující výstup.

```
<AddLabelForm />                                  
  √ changes input value on change event           
  √ uses handleInputChange                        
  √ calls onSubmit prop when submitted            
  √ cleans input on submit                        
                                                  
<App />                                           
  √ should contain <AddLabelForm /> components    
  √ should contain <Labels /> components          
                                                  
<Label label="bar" />                             
  √ has class "label"                             
  √ text is "bar"                                 
                                                  
<Labels labels={['foo', 'bar']} />                
  √ should contain two <Label />                  
                                                  
                                                  
9 passing (370ms)                                 
```

K testování volání metod využijte `spy` z knihovny `sinon`. Pro testování komponent využívejte `shallow` z `enzyme`, která izoluje komponentu a nepotřebuje  reálný `document`.

## Postup 3

Vytvořte postupně testy komponent:

- `test/App/Labels/test.js`
- `test/App/AddLabelForm/test.js`
- `test/App/test.js`

Během vytváření je možné spustit `npm` příkaz `test` v takzvaném *watch mode* a ledovat tak testy periodicky.

```
npm test -- -w
```

Příklad testu s použítím funkce `spy`:

```
describe(`<AddLabelForm />`, () => {
	it('uses handleInputChange', () => {
		const handleInputChange = spy(AddLabelForm.prototype, 'handleInputChange');

		const wrapper = shallow(<AddLabelForm onSubmit={() => undefined} />);

		wrapper.find('input').simulate('change', { target: { value: 'a' } });
		wrapper.find('input').simulate('change', { target: { value: 'ab' } });

		expect(handleInputChange.callCount).to.equal(2);
	});
});
```
