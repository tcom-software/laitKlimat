export default class GTAG {
  static GA_TRACKING_ID = "UA-128904283-1";

  static trackPageView(url) {
    try {
      gtag("config", this.GA_TRACKING_ID, {
        page_location: url,
      });
    } catch (error) {
      console.log("some error in trackPageView");
    }
  }

  static Kupit1Click() {
    gtag("event", "click", {
      event_category: "Kupit1Click",
      event_action: "click",
    });
  }

  static OstavitNomerChat() {
    gtag("event", "click", {
      event_category: "OstavitNomerChat",
      event_action: "click",
    });
  }

  static OformitZakaz() {
    gtag("event", "click", {
      event_category: "OformitZakaz",
      event_action: "click",
    });
  }

  static PokazatNomer() {
    gtag("event", "click", {
      event_category: "PokazatNomer",
      event_action: "click",
    });
  }

  static OstavitNomerAll() {
    gtag("event", "click", {
      event_category: "OstavitNomerAll",
      event_action: "click",
    });
  }

  static KupitVKredit() {
    gtag("event", "click", {
      event_category: "OstavitNomerAll",
      event_action: "click",
    });
  }
}
