# Testování aplikace

## Popis

Testování Reactu si ukážeme na jednoduché aplikaci nezvané Labeler (Štítkovač). Aplikace neumožňuje nic jiného než přidávání štítků. Obsahuje jedno pole pro zadání textu, odesílací tlačítko a seznam štítků, které byly v aplikaci přidány.

## Úkol 2

Nainstalujte potřebné knihovny pro testování Reactu:
- spouštěč testů [Mocha]: https://mochajs.org/
- nástroj pro assert [Chai]: http://chaijs.com/
- knihovnu pro mockování [Sinon]: http://sinonjs.org/
- knihovnu [Enzyme]: http://airbnb.io/enzyme/ pro vykreslování komponent: 

Přidejte příkaz do `package.json` pro spuštění testů

Vyzkoušejte správné nastavení spuštěním připraveného testu React komponenty `<Label />`

## Postup 2

### Knihovny 

Přepínač `--save` zajistí uložení závislosti do `package.json`

#### Mocha

```
npm install mocha --save
```

#### Chai

```
npm install chai --save
```

#### Sinon

```
npm install sinon --save
```

#### Enzyme

```
npm install enzyme --save
```

Enzyme potřebuje ke svému fungování `react-addons-test-utils`, oficiální React přídavky pro testování

```
npm install react-addons-test-utils --save
```

### Příkaz pro spuštění

Do `package.json` v sekci `scripts` nahradit příkaz `test` následujícím:

```
"test": "mocha --require babel-register --require ignore-styles --recursive"
```

Test obsahuje dvě závislosti, které nainstalujeme stejným způsobem jako předchozí knihovny

```
npm install babel-register ignore-styles --save
```

### Spuštění testů

```
npm test
```
