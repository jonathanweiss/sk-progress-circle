# [sk-progress-circle](https://github.com/jonathanweiss/sk-progress-circle#readme) *0.0.0-development*

> Displays a progress in form of a circle


### src/index.js


#### displayLabelContent(value, label) 

Returns a string representing the value using the string template




##### Parameters

- **value** `Number`   The progress (0..100)
- **label** `String`   A template string that may contain'%s' which will be replaced with the value




##### Returns


- `String`   The resulting text



#### backgroundColor() 

Color to use for the background of the circle






##### Examples

```javascript
@html <sk-progress background-color="#a9a9a9"></sk-progress>
```
```javascript
@js progress.backgroundColor = '#a9a9a9';
```


##### Returns


- `Void`



#### color() 

Color to use for the progress part of the circle






##### Examples

```javascript
@html <sk-progress color="#339900"></sk-progress>
```
```javascript
@js progress.color = '#339900';
```


##### Returns


- `Void`



#### label() 

Text to be used inside the circle to diplay the current status. The "%s" will be replaced with the actual number






##### Examples

```javascript
@html <sk-progress label="%s percent"></sk-progress>
```
```javascript
@js progress.label = '%s percent';
```


##### Returns


- `Void`



#### labelColor() 

Text color of the label






##### Examples

```javascript
@html <sk-progress label-color="darkgrey"></sk-progress>
```
```javascript
@js progress.labelColor = 'darkgrey';
```


##### Returns


- `Void`



#### labelSize() 

Font-size of the label






##### Examples

```javascript
@html <sk-progress label-size="24px"></sk-progress>
```
```javascript
@js progress.labelSize = '24px';
```


##### Returns


- `Void`



#### size() 

Width and height of the ciricle in pixels






##### Examples

```javascript
@html <sk-progress size="200"></sk-progress>
```
```javascript
@js progress.size = 200;
```


##### Returns


- `Void`



#### status() 

Progress status from 0 to 100






##### Examples

```javascript
@html <sk-progress status="33"></sk-progress>
```
```javascript
@js progress.status = 33;
```


##### Returns


- `Void`



#### render(elem) 

Displays the progress circle




##### Parameters

- **elem** `Object`   The DOM node




##### Returns


- `Object`   The resulting JSX tree



#### return() 

eslint-disable react/react-in-jsx-scope






##### Returns


- `Void`




*Documentation generated with [doxdox](https://github.com/neogeek/doxdox).*
