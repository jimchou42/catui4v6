/**
 * 对外部传入的数据进行组织，补充config.tag、config.tagHtml，包括子数据
 */
import typeoptions from './typeoptions.js'
import finder from './finder.js'
import guid from './guid.js'

export default function assembly(data, vm) {
    if(!data
      ||!data.attributes
      ||!data.config
      ||!data.children) {
      return null;
    }
    var assembled = Object.assign({}, {
      attributes: Object.assign({}, data.attributes),
      config: Object.assign({}, data.config),
      children: []
    });

    if(data.attributes.$type==='page') {
      vm.$set(assembled.config, 'tag', 'CatDiv');
      vm.$set(assembled.config, 'tagHtml', 'CatPageTag');
      vm.$set(assembled.config, 'catid', guid());
      /*
      vm.$set(assembled.config, 'metadata', {
        attributes: {
          $type: 'treeitem',
          ename: '_root_',
          cname: '元数据'
        },
        config: {
          hideframe: true,
          expand: false,
          isleaf: false,
          checkbox: true,
          catid: '__metadatatree'
        },
        children: []
      });
      vm.$set(assembled.config, 'dbdata', {
        attributes: {
          $type: 'treeitem',
          ename: '_root_',
          cname: '数据库数据'
        },
        config: {
          hideframe: true,
          expand: false,
          isleaf: false,
          checkbox: true,
          catid: '__dbdatatree'
        },
        children: []
      });
      */
    }
    else {
      var sample = finder({attributes:{}, config:{}, children:typeoptions}, 'attributes', 'value', data.attributes.$type);
      if(sample!==undefined&&sample!==null) {
        vm.$set(assembled.config, 'tag', sample.config.tag);
        vm.$set(assembled.config, 'tagHtml', sample.config.tagHtml);
      }
    }

    for(var child of data.children) {
      assembled.children.push(assembly(child, vm));
    }
    return assembled;

}
