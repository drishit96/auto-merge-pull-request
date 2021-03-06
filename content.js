window.setInterval(function () {
  let mergeButton = document.querySelector("#partial-pull-merging > div.merge-pr.js-merge-pr.js-details-container.Details.is-merging > div > div > div > div.merge-message > div.select-menu.d-inline-block > div > button.btn-group-merge.border-right-0.rounded-left-1.btn.BtnGroup-item.js-details-target");
  let squashAndMergeButton = document.querySelector("#partial-pull-merging > div.merge-pr.js-merge-pr.js-details-container.Details.is-squashing > div > div > div > div.merge-message > div.select-menu.d-inline-block > div > button.btn-group-squash.border-right-0.rounded-left-1.btn.BtnGroup-item.js-details-target");
  let updateButton = document.querySelector("#partial-pull-merging > div.merge-pr.js-merge-pr.js-details-container.Details.is-merging > div > div > div > div:nth-child(3) > form > button");
  let confirmMergeButton = document.querySelector("#partial-pull-merging > div.merge-pr.js-merge-pr.js-details-container.Details.is-merging.open.Details--on > form > div > div.commit-form-actions > div > div.BtnGroup.btn-group-merge > button");
  let confirmSquashAndMerge = document.querySelector("#partial-pull-merging > div.merge-pr.js-merge-pr.js-details-container.Details.is-squashing.open.Details--on > form > div > div.commit-form-actions > div > div.BtnGroup.btn-group-squash > button");

  if (confirmMergeButton && !confirmMergeButton.disabled) {
    confirmMergeButton.click();
    chrome.runtime.sendMessage({ triggerNotification: true }, function () {});
  } else if (confirmSquashAndMerge && !confirmSquashAndMerge.disabled) {
    confirmSquashAndMerge.click();
    chrome.runtime.sendMessage({ triggerNotification: true }, function () {});
  } else if (mergeButton && !mergeButton.disabled) {
    mergeButton.click();
  } else if (squashAndMergeButton && !squashAndMergeButton.disabled) {
    squashAndMergeButton.click();
  } else if (updateButton && !updateButton.disabled) {
    updateButton.click();
  }
}, 5000);