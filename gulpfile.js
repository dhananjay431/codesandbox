const { src, dest, parallel } = require('gulp');
const babel = require("gulp-babel");
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
function js() {
    return src([
        "app/main/app.mainCtrl.js",
        "app/mainApp/app.mainAppCtrl.js",
        "app/mainApp/create/app.createCtrl.js",
        "app/mainApp/ProjectRequirement/app.ProjectRequirementCtrl.js",
        "app/mainApp/toolmakerMapping/toolmaker_mapping.ctrl.js",
        "app/mainApp/panelGrouping/panelGrouping.ctrl.js",
        "app/myERFQ/erfq.ctrl.js",
        "app/RFQFloat/RFQFloat.ctrl.js",
        "app/quoteCompare/quoteCompare.ctrl.js",
        "app/quoteCompare/duplicateToolmakar.ctrl.js",
        "app/quoteCompare/proSelection.ctrl.js",
        "app/quoteCompare/revisePanel.ctrl.js",
        "app/quoteCompare/noOfDies.ctrl.js",
        "app/quoteCompare/dieWeight.ctrl.js",
        "app/quoteCompare/basicCost.ctrl.js",
        "app/quoteCompare/landedCost.ctrl.js",
        "app/quoteCompare/costPerTon.ctrl.js",
        "app/quoteCompare/bestQuoted.ctrl.js",
        "app/quoteCompare/prefTmkComp.ctrl.js",
        "app/quoteCompare/targetCost.ctrl.js",
        "app/quoteCompare/prefTmkCompView.ctrl.js",
        "app/quoteCompare/submitTmk.ctrl.js",
        "app/quoteCompare/submitTmkTbl.ctrl.js",
        "app/toolmakerSummary/toolmaker_summary_ctrl.js",
        "app/toolmakerRegister/ToolMakerRegisterController.ctrl.js",
        "app/dieCostEstimation/dieCostEstimation.ctrl.js",
        "app/erfqInbox/erfqInbox.ctrl.js",
        "app/erfqInbox/childFilterBox.ctrl.js",
        "app/finalizeToolmaker/finalizeToolmakerCtrl.js",
        "app/search/search.ctrl.js",
        "assets/js/component.js",
        "app/TMProcessSubmission/tmProcessSubmission.ctrl.js",
        "app/TAStatus/tastatus.ctrl.js",
        "app/FinalizeTool/finalizetool.ctrl.js",
        "app/projectLibrary/projectLibrary.ctrl.js"], { sourcemaps: false })
        .pipe(babel())
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(dest('build/js', { sourcemaps: false }))
  }
exports.js = js;

exports.default = parallel(js);


