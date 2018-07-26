<template>
  <CatFrame :attributes="attributes" :config="config">
    <div class="upload-aup">
  		<div class="k-widget k-upload k-header" :class="{' k-state-disabled': attributes.readonly}">
  			<div class="k-dropzone">
  				<div class="k-button k-upload-button" aria-label="选择...">
  					<input type="file" :name="attributes.ename" :id="attributes.ename" data-role="upload"
  						multiple="multiple" autocomplete="off" @change="change"><span>选择...</span>
  				</div>
  				<em>拖拽要上传的文件到此处</em><strong
  					class="k-upload-status k-upload-status-total"><span
  					class="k-icon k-i-tick">已上传</span>完成</strong>
  			</div>
  			<ul class="k-upload-files k-reset" v-if="config.filelist!==undefined">
  				<li class="k-file k-file-success" v-for="(file, idx) in config.filelist" :key="file.lastModified">
            <span class="k-progress" style="width: 0%; display: none;"></span>
            <span class="k-file-extension-wrapper">
              <span class="k-file-extension">{{fileextension(file.name)}}</span>
              <span class="k-file-state">已上传</span>
            </span>
            <span class="k-file-name-size-wrapper">
              <span class="k-file-name" :title="file.name">{{file.name}}</span>
              <span class="k-file-size">{{renderSize(file.size)}}</span>
            </span>
            <strong class="k-upload-status">
              <span class="k-upload-pct">100%</span>
              <button type="button" class="k-button k-button-bare k-upload-action" @click="config.filelist.splice(idx, 1)">
  							<span class="k-icon k-i-close k-i-delete" title="移除" aria-label="移除"></span>
  						</button>
            </strong>
          </li>
  			</ul>
  		</div>
  	</div>
  </CatFrame>
</template>
<script>
export default {
  name: 'CatUpload',
  props: {
    attributes: Object,
    config: Object,
    children: Array
  },
  methods: {
    change: function(e) {
      var filelist = [];
      for(var file of e.target.files) {
        filelist.push(file);
      }
      this.$set(this.config, 'filelist', filelist);
    },
    fileextension: function(filename) {
      var li = filename.lastIndexOf('.');
      if(li===-1) {
        return '';
      }
      else {
        return filename.substring(li+1);
      }
    },
    renderSize: function(value) {
      if(null==value||value=='') {
          return "0 Bytes";
      }
      var unitArr = new Array("Bytes","KB","MB","GB","TB","PB","EB","ZB","YB");
      var index=0;
      var srcsize = parseFloat(value);
      index=Math.floor(Math.log(srcsize)/Math.log(1024));
      var size =srcsize/Math.pow(1024,index);
      size=size.toFixed(2);//保留的小数位数
      return size+unitArr[index];
    }
  }
}
</script>

<style scoped>
</style>
