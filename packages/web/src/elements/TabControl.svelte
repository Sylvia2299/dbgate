<script lang="ts">
  import _ from 'lodash';

  interface TabDef {
    label: string;
    slot?: number;
    component?: any;
    props?: any;
  }

  export let tabs: TabDef[];
  export let value = 0;
  export let isInline = false;

  export function setValue(index) {
    value = index;
  }
  export function getValue() {
    return value;
  }
</script>

<div class="main">
  <div class="tabs">
    {#each _.compact(tabs) as tab, index}
      <div class="tab-item" class:selected={value == index} on:click={() => (value = index)}>
        <span class="ml-2">
          {tab.label}
        </span>
      </div>
    {/each}
  </div>

  <div class="content-container">
    {#each _.compact(tabs) as tab, index}
      <div class="container" class:isInline class:tabVisible={index == value}>
        <svelte:component this={tab.component} {...tab.props} />
        {#if tab.slot != null}
          {#if tab.slot == 0}<slot name="0" />
          {:else if tab.slot == 1}<slot name="1" />
          {:else if tab.slot == 2}<slot name="2" />
          {:else if tab.slot == 3}<slot name="3" />
          {:else if tab.slot == 4}<slot name="4" />
          {:else if tab.slot == 5}<slot name="5" />
          {:else if tab.slot == 6}<slot name="6" />
          {:else if tab.slot == 7}<slot name="7" />
          {/if}
        {/if}
      </div>
    {/each}
  </div>
</div>

<style>
  .main {
    display: flex;
    flex: 1;
    flex-direction: column;
  }

  .tabs {
    display: flex;
    height: var(--dim-tabs-height);
    right: 0;
    background-color: var(--theme-bg-2);
  }

  .tab-item {
    border-right: 1px solid var(--theme-border);
    padding-left: 15px;
    padding-right: 15px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  /* .tab-item:hover {
    color: ${props => props.theme.tabs_font_hover};
  } */
  .tab-item.selected {
    background-color: var(--theme-bg-1);
  }

  .content-container {
    flex: 1;
    position: relative;
  }

  .container:not(.isInline) {
    position: absolute;
    display: flex;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }

  .container:not(.tabVisible):not(.isInline) {
    visibility: hidden;
  }

  .container.isInline:not(.tabVisible) {
    display: none;
  }
</style>