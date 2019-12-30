# \<x-php-app>

## About

* An app using [x-php](https://jsbin.com/xicajacava/1/edit).

## Try it out

* <a href="https://jsbin.com/yugefiyubo/edit">https://jsbin.com/yugefiyubo/edit</a>

```php
<html><body>
<x-php>
  <script type="text/php">
    <?php
      $it = new RecursiveIteratorIterator(new RecursiveDirectoryIterator('.'));

      foreach ($it as $name => $entry) {
        echo "$name <br/>";
      }
  </script>
</x-php>
<script>window.__XPHP_REMOTE_PACKAGE_BASE = 'https://kherrick.github.io/x-php/assets/'</script>
<script type="module" src="https://kherrick.github.io/x-php/dist/esm/XPHP.js"></script>
</body></html>
```
