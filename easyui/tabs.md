# Tabs

## Adding new tab panel to existing tabs control

### Contents as html markups

```
$('#tt').tabs('add',{
  title: 'Test',
  content: "<h1>Hello, World!</h1>",
  selected: true,
  closable:true
});
```

### Contents as child element

```
var tabId = 'hello-world';
$('#tt').tabs('add',{
  id: tabId,
  title: 'Test',
  selected: true,
  closable:true
});

var content = document.createElement('div');
...
$('#' + tabId).append(content);
```

### Tab panels cannot be added by re-creation

Tab panels cannot be added by appending child DOM elements to existing rendered tabs control,
and re-created with js code like this:

```
$('#tt').tabs({
  ...
});
```
which is making mess.

## Testing tab panel existence

Only title, or index number of tab panel is accepted, id is not supported. 

```
var tabTitle = 'Hello, World!';
if ($('#tt').tabs('exists', tabTitle)){
  $('#tt').tabs('select', tabTitle);
} else {
  console.log("tab with title '" + tabTitle + "' does not exist.");
}
```



