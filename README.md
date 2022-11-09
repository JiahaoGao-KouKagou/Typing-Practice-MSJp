# Typing Practice (MS Japanese)

This is a typing practice webpage for MS Japanese input method.

There are 2 pages: index and practice.


## index

Tabels of key map are shown in this page.
Please choose which line to practice, and click the start button.
A "get" requset will be sent, but there's no service, only a JS file. 
And the get request is used to carry the line index to ./practice.js.


## practice

Show a kana, and you shoud type the corresponding key.

### html
Do init:
    Load selected lines (practiceCollection)
And the main loop:
    Load char to show now (nowChar) and show it    (1) 
    Key event listener:
        IF true type
            Show next char (goto (1))
        ELSE
            Show a red cross (X)


### js:
Separated functions :
- GetRequest()
- createPracticeCollection(request) 
- chooseCharRandomly(practiceCollection)
- isCorrect(nowChar, nowKey)

And the word stock: charCollection