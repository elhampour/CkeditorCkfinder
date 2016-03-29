using System.Web.Mvc;

namespace CkeditorCkfinder.Controllers
{
    public class HomeController : Controller
    {
        public static string content = "";

        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Add(EditorVm editorVm)
        {
            content = editorVm.Content;
            return View("Index",editorVm);
        }

        public ActionResult ViewPage()
        {
            var editorVm = new EditorVm()
            {
                Content = content
            };
            return View(editorVm);
        }
    }

    public class EditorVm
    {
        [AllowHtml]
        public string Content { get; set; }
    }
}