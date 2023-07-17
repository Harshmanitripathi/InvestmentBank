const Drawer = () => {
    return (<div class="drawer-top drawer-end">
  <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    
    <label for="my-drawer-4" class="btn btn-warning">Start Investing</label>
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-4" class="drawer-overlay"></label>
    <ul class="menu p-4 w-80 h-full bg-base-200 text-base-content">
      
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>)
}

export default Drawer;