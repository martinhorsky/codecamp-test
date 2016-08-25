# Testování aplikace

## Popis

Testování Reactu si ukážeme na jednoduché aplikaci nezvané Labeler (Štítkovač). Aplikace neumožňuje nic jiného než přidávání štítků. Obsahuje jedno pole pro zadání textu, odesílací tlačítko a seznam štítků, které byly v aplikaci přidány.

## Úkol 4

Spusťte příkaz test ve *watch mode*, pozorujte, kdy testy procházejí a kdy ne, pokud budete upravovat zdrojové soubory komponent. Například odstraňte *property* `onChange` z `input` v souboru `src/App/AddLabelForm/index.js`

```
npm test -- -w
```
