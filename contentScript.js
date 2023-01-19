setTimeout(() => {
  const inactiveFollowingTab = document.querySelector('[role=tablist]').lastElementChild.querySelector('[role=tab][aria-selected=false]');
  if (inactiveFollowingTab === null) {
    return;
  }

  inactiveFollowingTab.click();
}, 300);
