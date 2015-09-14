# Scratch pad for input area design

## Goal
### Part 1
The short term goal is to implement an input area with a bare bone Codemirror instance.  If possible, the models (cursor and content) will be wired directly to Codemirror equivalents.  Codemirror will behave as the view.

### Part 2
The models should be abstract enough that someone can implement an alternative editor (i.e. Ace or PosterJS).  The alternative could then be dropped into the notebook in lieu of the Codmirror implementation.

## Design
### Content Model
- text
- language
- cursors

### Cusor Model
- id
- local *whether is owned locally (RT collab)*
- primaryPos
    - row
    - col
- secondaryPos
    - row
    - col

### Events
model value change  
text change (diff)  
cursor added  
cursor removed  
