<script>
import bindEvents from '../../util/bindEvent'
import primitive from '../../mixins/primitive'
export default {
  name: 'cesium-3dtileset',
  render (h) {},
  mixins: [primitive],
  props: {
    url: String,
    show: {
      type: Boolean,
      default: true
    },
    modelMatrix: Object,
    shadows: {
      type: Number,
      default: 1
    },
    maximumScreenSpaceError: {
      type: Number,
      default: 16
    },
    maximumMemoryUsage: {
      type: Number,
      default: 512
    },
    cullWithChildrenBounds: {
      type: Boolean,
      default: true
    },
    dynamicScreenSpaceError: {
      type: Boolean,
      default: false
    },
    dynamicScreenSpaceErrorDensity: {
      type: Number,
      default: 0.00278
    },
    dynamicScreenSpaceErrorFactor: {
      type: Number,
      default: 4.0
    },
    dynamicScreenSpaceErrorHeightFalloff: {
      type: Number,
      default: 0.25
    },
    skipLevelOfDetail: {
      type: Boolean,
      default: true
    },
    baseScreenSpaceError: {
      type: Number,
      default: 1024
    },
    skipScreenSpaceErrorFactor: {
      type: Number,
      default: 16
    },
    skipLevels: {
      type: Number,
      default: 1
    },
    immediatelyLoadDesiredLevelOfDetail: {
      type: Boolean,
      default: false
    },
    loadSiblings: {
      type: Boolean,
      default: false
    },
    clippingPlanes: Object,
    classificationType: Object,
    ellipsoid: Object,
    pointCloudShading: Object,
    imageBasedLightingFactor: Object,
    lightColor: Object,
    debugFreezeFrame: {
      type: Boolean,
      default: false
    },
    debugColorizeTiles: {
      type: Boolean,
      default: false
    },
    debugWireframe: {
      type: Boolean,
      default: false
    },
    debugShowBoundingVolume: {
      type: Boolean,
      default: false
    },
    debugShowContentBoundingVolume: {
      type: Boolean,
      default: false
    },
    debugShowViewerRequestVolume: {
      type: Boolean,
      default: false
    },
    debugShowGeometricError: {
      type: Boolean,
      default: false
    },
    debugShowRenderingStatistics: {
      type: Boolean,
      default: false
    },
    debugShowMemoryUsage: {
      type: Boolean,
      default: false
    },
    debugShowUrl: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    url () {
      this.reload()
    },
    show () {
      this.reload()
    },
    modelMatrix () {
      this.reload()
    },
    shadows () {
      this.reload()
    },
    maximumScreenSpaceError () {
      this.reload()
    },
    maximumMemoryUsage () {
      this.reload()
    },
    cullWithChildrenBounds () {
      this.reload()
    },
    dynamicScreenSpaceError () {
      this.reload()
    },
    dynamicScreenSpaceErrorDensity () {
      this.reload()
    },
    dynamicScreenSpaceErrorFactor () {
      this.reload()
    },
    dynamicScreenSpaceErrorHeightFalloff () {
      this.reload()
    },
    skipLevelOfDetail () {
      this.reload()
    },
    baseScreenSpaceError () {
      this.reload()
    },
    skipScreenSpaceErrorFactor () {
      this.reload()
    },
    skipLevels () {
      this.reload()
    },
    immediatelyLoadDesiredLevelOfDetail () {
      this.reload()
    },
    loadSiblings () {
      this.reload()
    },
    clippingPlanes () {
      this.reload()
    },
    classificationType () {
      this.reload()
    },
    ellipsoid () {
      this.reload()
    },
    pointCloudShading () {
      this.reload()
    },
    imageBasedLightingFactor () {
      this.reload()
    },
    lightColor () {
      this.reload()
    },
    debugFreezeFrame () {
      this.reload()
    },
    debugColorizeTiles () {
      this.reload()
    },
    debugWireframe () {
      this.reload()
    },
    debugShowBoundingVolume () {
      this.reload()
    },
    debugShowContentBoundingVolume () {
      this.reload()
    },
    debugShowViewerRequestVolume () {
      this.reload()
    },
    debugShowGeometricError () {
      this.reload()
    },
    debugShowRenderingStatistics () {
      this.reload()
    },
    debugShowMemoryUsage () {
      this.reload()
    },
    debugShowUrl () {
      this.reload()
    }
  },
  methods: {
    createCesiumObject () {
      const { Cesium, url, show, modelMatrix, shadows, maximumScreenSpaceError, maximumMemoryUsage, cullWithChildrenBounds, dynamicScreenSpaceError,
        dynamicScreenSpaceErrorDensity, dynamicScreenSpaceErrorFactor, dynamicScreenSpaceErrorHeightFalloff, skipLevelOfDetail, baseScreenSpaceError,
        skipScreenSpaceErrorFactor, skipLevels, immediatelyLoadDesiredLevelOfDetail, loadSiblings, clippingPlanes, classificationType, ellipsoid, pointCloudShading,
        imageBasedLightingFactor, lightColor, debugFreezeFrame, debugColorizeTiles, debugWireframe, debugShowBoundingVolume, debugShowContentBoundingVolume,
        debugShowViewerRequestVolume, debugShowGeometricError, debugShowRenderingStatistics, debugShowMemoryUsage, debugShowUrl } = this
      let options = {
        url,
        show,
        modelMatrix,
        shadows,
        maximumScreenSpaceError,
        maximumMemoryUsage,
        cullWithChildrenBounds,
        dynamicScreenSpaceError,
        dynamicScreenSpaceErrorDensity,
        dynamicScreenSpaceErrorFactor,
        dynamicScreenSpaceErrorHeightFalloff,
        skipLevelOfDetail,
        baseScreenSpaceError,
        skipScreenSpaceErrorFactor,
        skipLevels,
        immediatelyLoadDesiredLevelOfDetail,
        loadSiblings,
        clippingPlanes,
        classificationType,
        ellipsoid,
        pointCloudShading,
        imageBasedLightingFactor,
        lightColor,
        debugFreezeFrame,
        debugColorizeTiles,
        debugWireframe,
        debugShowBoundingVolume,
        debugShowContentBoundingVolume,
        debugShowViewerRequestVolume,
        debugShowGeometricError,
        debugShowRenderingStatistics,
        debugShowMemoryUsage,
        debugShowUrl
      }
      this.removeNullItem(options)
      let tileset = new Cesium.Cesium3DTileset(options)
      bindEvents.call(this, tileset)
      return tileset
    }
  }
}
</script>
