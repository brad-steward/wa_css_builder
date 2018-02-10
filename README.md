# WA CSS Builder

Switch to the clean-version branch for all the sample scss removed!

## Installation

Run the following commands to get this going!

## NOTE

This relies on npm to install the packages so you'll need to install that first if you don't have it already: [How To Install npm](https://www.npmjs.com/get-npm)

### 1. Open up a terminal or cmd window in the directory where you downloaded this repo

### 2. Install Gulp and other dependencies

```cli
npm i
```

### 3. Run Gulp

```cli
gulp hammer
```

### 4. Copy and paste

Your css will output into `tongs`, with which you can carry your code into WA, just copy and paste from those files!

### 5. Rinse and repeat

Leave it running in your terminal window and make changes to any of the `.scss` files in `anvil`. The `tongs` files will automatically update when you save! If you have to close the terminal window, just open a new one from this same directory and run `gulp hammer` again.

## SCSS and SASS

### What are they?

CSS is typically very rigid. You have to spell out a full selector each time for every element or type of element you want to style. SASS made that so much better by allowing you to use variables and mixins for consistent elements/values. And SCSS made it even better by allowing you to set up hierarchies of CSS. This makes your CSS much more concise and flexible.

SCSS has a diverse set of skills to take advantage of, below are a few examples of major uses, but for more examples and a more comprehensive description check out [this reference guide.](http://sass-lang.com/guide)

### Example:

<table style="width: 100%;">
<tr style="width: 100%;">
<td style="width: 50%; position: relative; top: 0;">

This basic CSS can be written more simply...

```css
.user-css.page-article .article-title h1,
.user-css-extended.page-article .article-title h1 {
  color: white;
}
.user-css.page-article .article-content h1,
.user-css-extended.page-article .article-content h1 {
  color: #067bc2;
}
.user-css.page-article .article-content h2,
.user-css-extended.page-article .article-content h2 {
  color: #368cc1;
}
.user-css.page-article .article-content h3,
.user-css-extended.page-article .article-content h3 {
  color: #5b9ac1;
}
.user-css.page-article .article-content h4,
.user-css-extended.page-article .article-content h4 {
  color: #d56062;
}
.user-css.page-article .article-content h5,
.user-css-extended.page-article .article-content h5 {
  color: #ed5355;
}
```

</td>
<td style="width: 50%; position: relative; top: 0;">

... like this!

```scss
.user-css,
.user-css-extended {
  .article-title {
    h1 {
      color: white;
    }
  }
  .article-content {
    h1 {
      color: #067bc2;
    }
    h2 {
      color: #368cc1;
    }
    h3 {
      color: #5b9ac1;
    }
    h4 {
      color: #d56062;
    }
    h5 {
      color: #ed5355;
    }
  }
}
```

</td>
</tr>
</table>

You can even do more advanced referencing. Let's say you want to modify something specifically on article pages. It's as simple as adding another section. The `&` is like saying `This Selector I'm Under` so if you need to modify `.page-article` you don't have to start up a whole nother section for it, just add it under `.user-css` so everything stays together.

<table style="width: 100%;">
<tr style="width: 100%;">
<td style="width: 50%; position: relative; top: 0;">

So instead of all this...

```css
.user-css.page-article,
.user-css-extended.page-article {
  background: url('url/shortened/so-the-block-wont-be-too-big');
  color: white;
  background-size: 100%;
  background-repeat: repeat-y;
}
.user-css.page-article .panel.panel-default,
.user-css-extended.page-article .panel.panel-default {
  color: #333;
}
.user-css.page-article .panel.panel-default a,
.user-css.page-article .panel.panel-default a:hover,
.user-css.page-article .panel.panel-default a:focus,
.user-css-extended.page-article .panel.panel-default a,
.user-css-extended.page-article .panel.panel-default a:hover,
.user-css-extended.page-article .panel.panel-default a:focus {
  color: #a94442;
}
.user-css .article-title h1,
.user-css-extended .article-title h1 {
  color: white;
}
.user-css .article-content h1,
.user-css-extended .article-content h1 {
  color: #067bc2;
}
.user-css .article-content h2,
.user-css-extended .article-content h2 {
  color: #368cc1;
}
.user-css .article-content h3,
.user-css-extended .article-content h3 {
  color: #5b9ac1;
}
.user-css .article-content h4,
.user-css-extended .article-content h4 {
  color: #d56062;
}
.user-css .article-content h5,
.user-css-extended .article-content h5 {
  color: #ed5355;
}
```

</td>
<td style="width: 50%; position: relative; top: 0;">

... you just add a bit more like this!

```scss
.user-css,
.user-css-extended {
  &.page-article {
    background: url('url/shortened/so-the-block-wont-be-too-big');
    color: white;
    background-size: 100%;
    background-repeat: repeat-y;
    .panel.panel-default {
      color: $soft-black;
      a,
      a:hover,
      a:focus {
        color: #a94442;
      }
    }
  }

  .article-title {
    h1 {
      color: white;
    }
  }
  .article-content {
    h1 {
      color: #067bc2;
    }
    h2 {
      color: #368cc1;
    }
    h3 {
      color: #5b9ac1;
    }
    h4 {
      color: #d56062;
    }
    h5 {
      color: #ed5355;
    }
  }
}
```

</td>
</tr>
</table>

Using `&.page-article` tells it that because its under `.user-css` it should put the two together so it ends up resolving as `.user-css.page-article`.
