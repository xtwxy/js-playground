# Form

## id or name?

Forms is identified by id and input fields(input/select option/...) is identified by name.

Suppose that there is a form like this:
```
<form id="form-id" name="form-name">
  <input id="field-id" name="field-name">
  ...
</form>
```
Then the correct way to load the form fields with data is like this: 
```
var formId = 'form-id';
$('#' + formId).form('load', {
  'field-name': 'some field value',
  ...
});
```
Not this:
```
var formName = 'form-name';
$('#' + formName).form('load', {  // cannot select with attribute 'name'
  'field-id': 'some field value', // cannot select with attribute 'id', 
                                  // even if form is selected with 'id' attribute.
  ...
});
```

