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

  static OformitZakaz() {
    gtag("event", "click", {
      event_category: "OformitZakaz",
      event_action: "click",
    });
  }

  static NeDozvonilis() {
    gtag("event", "click", {
      event_category: "NeDozvonilis",
      event_action: "click",
    });
  }

  static PokazatNomer() {
    gtag("event", "click", {
      event_category: "PokazatNomer",
      event_action: "click",
    });
  }

  static VsplivOkno() {
    gtag("event", "click", {
      event_category: "VsplivOkno",
      event_action: "click",
    });
  }
}
