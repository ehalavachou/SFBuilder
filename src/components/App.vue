<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col main-column">
          <div id="statuses" class="hidden" data-mode-move="off" data-mode-remove="off" data-mode-add="off"></div>
          <div id="settings" class="hidden" data-scale="1" data-grid-size="32"></div>
          <div class="row">
            <div class="col-2">
              <div class="row component-panel">
                <div class="col">
                  <div class="object">
                    <img src="../assets/factory/machines/128px-Miner_MK1.png" alt="">
                    <button data-component-type="miner" type="button" class="btn btn-success add-component">Add</button>
                  </div>
                  <div class="object">
                    <img src="../assets/factory/machines/128px-Smelter.png" alt="">
                    <button data-component-type="smelter" type="button" class="btn btn-success add-component">Add
                    </button>
                  </div>
                  <div class="object">
                    <img src="../assets/factory/machines/128px-Constructor.png" alt="">
                    <button data-component-type="constructor" type="button" class="btn btn-success add-component">Add
                    </button>
                  </div>
                  <div class="object">
                    <img src="../assets/factory/machines/128px-Assembler.png" alt="">
                    <button data-component-type="assembler" type="button" class="btn btn-success add-component">Add
                    </button>
                  </div>
                  <div class="object">
                    <img src="../assets/factory/machines/128px-Manufacturer.png" alt="">
                    <button data-component-type="manufacturer" type="button" class="btn btn-success add-component">Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-8">
              <div class="row control-panel">
                <div class="col-4">
                  <div class="btn-group" role="group">
                    <button type="button" class="btn btn-primary" id="remove-mode">Remove mode</button>
                    <button type="button" class="btn btn-danger remove-mode-indicator">OFF</button>
                  </div>
                </div>
                <div class="col-4">
                  <h3 id="place-component" class="hidden">Place component!</h3>
                </div>
                <div class="col-4">
                  <h4 id="area-restricted" class="hidden text-red">Area restricted!</h4>
                </div>
              </div>
              <div class="row canvas-container">
                <canvas id="bg-frame"></canvas>
                <canvas id="main-frame"></canvas>
                <!--<canvas id="animate-frame"></canvas>-->
              </div>

            </div>
            <div class="col-2">
              <div class="row info-panel">
                <div class="col">
                  <h4>Info Panel</h4>
                  <div class="row info-panel-row">
                    <div class="col">
                      Selected object:
                      <div class="object-selected">
                      </div>
                    </div>
                  </div>
                  <div class="row info-panel-row added-objects">
                    <div class="col">
                      Added components:
                      <div class="row">
                        <div class="col objects-added">

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import css from '../css/app.css'
  export default {
    name: 'app',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

