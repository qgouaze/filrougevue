<template>
  <div class="footer">
    <ul class="footerlist internalLinks">
      <li class="listTitle">Questions?</li>
      <li>
        <RouterLink :to="{name: 'how'}">How does it work?</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'why' }">Why create this thing?</RouterLink>
      </li>
      <li>
        <RouterLink :to="{name: 'who'}">Who the heck are you?</RouterLink>
      </li>

    </ul>
    <ul class="footerlist externalLinks">
      <li class="listTitle">More books websites:  </li>
      <li><a href="https://annas-archive.org/">Anna's Archive</a></li>
      <li><a href="https://www.chasse-aux-livres.fr/">Chasse aux livres</a></li>
      <li><a href="https://openlibrary.org/">Open Library</a></li>

    </ul>
    <ul class="footerlist legal">
      <li>
        <RouterLink :to="{name: 'copyright'}">Copyright and boring legalities</RouterLink>
      </li>
      
    </ul>
  </div>
</template>
  
<style scoped>
@media (min-width: 1024px) {
  .footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding-top: 20px;
    margin-top: 20px;
    border-top: 1px solid lightgrey;
    font-size: smaller;
  }

  .footerlist {
    list-style: none;
  }
  .listTitle{
    margin-left:-10px;
  }
}
</style>
  