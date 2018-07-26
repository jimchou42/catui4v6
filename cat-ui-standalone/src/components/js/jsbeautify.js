export default function jsbeautify(source) {
  if(!source) {
    return '';
  }
  var beautify = require('js-beautify').js_beautify;
  var opts = {};

  opts.indent_size = 4;
  opts.indent_char = ' ';
  opts.max_preserve_newlines = 5;
  opts.preserve_newlines = opts.max_preserve_newlines !== "-1";
  opts.keep_array_indentation = false;
  opts.break_chained_methods = false;
  opts.indent_scripts = 'normal';
  opts.brace_style = 'collapse';
  opts.space_before_conditional = true;
  opts.unescape_strings = false;
  opts.jslint_happy = false;
  opts.wrap_line_length = 0;
  opts.space_after_anon_function = true;

  return beautify(source, opts);

}
