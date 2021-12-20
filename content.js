window.setInterval(function () {
  let mergeButton = document.querySelector("#partial-pull-merging > div.merge-pr.js-merge-pr.js-details-container.Details.is-merging.is-updating-via-merge > div > div > div > div > div.merge-message > div > div > button.btn-group-merge.rounded-left-1.btn.btn-primary.BtnGroup-item.js-details-target.hx_create-pr-button");
  let squashAndMergeButton = document.querySelector("#partial-pull-merging > div.merge-pr.js-merge-pr.js-details-container.Details.is-updating-via-merge.is-squashing > div > div > div > div > div.merge-message > div > div > button.btn-group-squash.rounded-left-1.btn.btn-primary.BtnGroup-item.js-details-target.hx_create-pr-button");
  let updateButton = document.querySelector("#partial-pull-merging > div.merge-pr.js-merge-pr.js-details-container.Details.is-merging > div > div > div > div:nth-child(3) > form > button");
  let confirmMergeButton = document.querySelector("#partial-pull-merging > div.merge-pr.js-merge-pr.js-details-container.Details.is-merging.is-updating-via-merge > div > form > div > div.commit-form-actions > div > div.BtnGroup.btn-group-merge > button");
  let confirmSquashAndMerge = document.querySelector("#partial-pull-merging > div.merge-pr.js-merge-pr.js-details-container.Details.is-updating-via-merge.is-squashing > div > form > div > div.commit-form-actions > div > div.BtnGroup.btn-group-squash > button");

  if (mergeButton && !mergeButton.disabled) {
    mergeButton.click();
    if (confirmMergeButton && !confirmMergeButton.disabled) {
      confirmMergeButton.click();
      chrome.runtime.sendMessage({ triggerNotification: true }, function () {});
    }
  } else if (squashAndMergeButton && !squashAndMergeButton.disabled) {
    squashAndMergeButton.click();
    if (confirmSquashAndMerge && !confirmSquashAndMerge.disabled) {
      confirmSquashAndMerge.click();
      chrome.runtime.sendMessage({ triggerNotification: true }, function () {});
    }
  } else if (updateButton && !updateButton.disabled) {
    updateButton.click();
  }
}, 5000);
