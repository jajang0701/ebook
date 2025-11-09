// OrderFormSection.tsx
import React, { useEffect, useRef } from "react";
import { Shield, Smartphone, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

/**
 * OrderFormSection
 * - Menyuntikkan hanya HTML form (tanpa <script>).
 * - Dynamically loads jQuery and orderonline embed script.
 * - Memanggil ooe('setup', ...) dan ooe('init', ...) setelah script siap.
 * - Cleanup minimal saat unmount.
 */

declare global {
  interface Window {
    ooe?: any;
    _ooe?: any;
    jQuery?: any;
    $?: any;
  }
}

const OO_USER = "ruangbuku";
const OO_PRODUCT_SLUG = "10000-usd-pertama";
const OO_PRODUCT_ID = "6910c3115f82848fe909a6b4";
const OO_FORM_ID = "oo-embed-form-10000-usd-pertama-694";
const OO_EMBED_JS = "https://cdn.orderonline.id/js/embed-v2-slim.min.js?v=8.0.4";
const OO_JQUERY = "https://cdn.orderonline.id/js/vendor/jquery.min.js";

function loadScript(src: string, id?: string) {
  return new Promise<HTMLScriptElement>((resolve, reject) => {
    try {
      if (id) {
        const existing = document.getElementById(id) as HTMLScriptElement | null;
        if (existing) {
          // If script already loaded and has finished, resolve immediately.
          if ((existing as any).dataset?.loaded === "true" || (existing as any).readyState === "complete") {
            resolve(existing);
            return;
          }
          // else wait for onload
          existing.addEventListener("load", () => resolve(existing));
          existing.addEventListener("error", () => reject(new Error(`Failed to load ${src}`)));
          return;
        }
      }

      const s = document.createElement("script");
      if (id) s.id = id;
      s.async = true;
      s.src = src;
      s.onload = () => {
        try {
          if (id) (s as any).dataset = { loaded: "true" };
        } catch {}
        resolve(s);
      };
      s.onerror = () => reject(new Error(`Failed to load ${src}`));
      document.body.appendChild(s);
    } catch (err) {
      reject(err);
    }
  });
}

function insertFormMarkup(container: HTMLElement) {
  container.innerHTML = `
    <div class="ooef">
      <form class="orderonline-embed-form"
            data-username="${OO_USER}"
            data-product-slug="${OO_PRODUCT_SLUG}"
            data-product-id="${OO_PRODUCT_ID}"
            id="${OO_FORM_ID}"
            data-origin="orderonline">
        <div class="ooef-loader" aria-live="polite" role="status">
          <div>Loading...</div>
        </div>
      </form>
    </div>
  `;
}

/** tries to init ooe and returns true if succeeded */
function tryInitOOE(): boolean {
  try {
    if (typeof window.ooe === "function") {
      window.ooe("setup", `https://${OO_USER}.orderonline.id`);
      window.ooe(
        "init",
        "6910c20cd5ff9a3ea005904f", // account id used in original embed snippet
        OO_PRODUCT_ID,
        null,
        OO_FORM_ID,
        {
          mode: "page",
          action: "Klik untuk pemesanan",
          title: "Form Pemesanan",
          triggerPixel: true,
          triggerGtm: false,
        }
      );
      return true;
    }
  } catch (e) {
    /* noop */
  }
  return false;
}

export function OrderFormSection() {
  const embedRef = useRef<HTMLDivElement | null>(null);
  const destroyed = useRef(false);

  useEffect(() => {
    destroyed.current = false;
    if (!embedRef.current) return;

    // 1) insert HTML scaffold (no <script>)
    insertFormMarkup(embedRef.current);

    // 2) load scripts in order: jQuery (if not present) -> embed script -> init
    (async () => {
      try {
        // load jQuery only if window.jQuery not present (some hosts may already include it)
        if (!window.jQuery && !window.$) {
          await loadScript(OO_JQUERY, "oo-embed-jquery");
        }

        if (destroyed.current) return;

        // load embed script (id prevents multiple injects)
        await loadScript(OO_EMBED_JS, "oo-embed-js");

        if (destroyed.current) return;

        // sometimes ooe is attached asynchronously; try immediate init, else poll briefly
        if (tryInitOOE()) {
          return;
        }

        // poll for up to 3 seconds to wait for ooe to appear
        const start = Date.now();
        const timeout = 3000;
        const interval = 100;
        await new Promise<void>((resolve, reject) => {
          const t = setInterval(() => {
            if (destroyed.current) {
              clearInterval(t);
              return resolve();
            }
            if (tryInitOOE()) {
              clearInterval(t);
              return resolve();
            }
            if (Date.now() - start > timeout) {
              clearInterval(t);
              return resolve(); // resolve anyway; we don't want to crash the app
            }
          }, interval);
        });

        // nothing else to do; if ooe didn't initialize, developer console will show it
      } catch (err) {
        // friendly console info for debugging
        // devs: check console & network -> maybe blocked by adblock/CSP
        // eslint-disable-next-line no-console
        console.error("[OrderOnlineEmbed] failed to load embed:", err);
      }
    })();

    return () => {
      destroyed.current = true;
      // do NOT aggressively remove scripts (may be used elsewhere).
      // If you want to remove the embed JS on unmount, uncomment below:
      // document.getElementById("oo-embed-js")?.remove();
      // document.getElementById("oo-embed-jquery")?.remove();
    };
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">
            Investasi Terkecil untuk <span className="text-primary">Perubahan Terbesar</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cukup dengan harga 1x kalah slot, kamu bisa dapat panduan lengkap untuk mengubah hidup
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="flex items-center gap-3 justify-center bg-card border border-card-border rounded-lg p-4">
            <Shield className="w-6 h-6 text-primary flex-shrink-0" />
            <div>
              <p className="text-sm font-bold text-foreground">Pembayaran Aman</p>
              <p className="text-xs text-muted-foreground">100% Secure</p>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center bg-card border border-card-border rounded-lg p-4">
            <Smartphone className="w-6 h-6 text-primary flex-shrink-0" />
            <div>
              <p className="text-sm font-bold text-foreground">Akses Instant</p>
              <p className="text-xs text-muted-foreground">eBook Langsung Terkirim</p>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center bg-card border border-card-border rounded-lg p-4">
            <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
            <div>
              <p className="text-sm font-bold text-foreground">Garansi 7 Hari</p>
              <p className="text-xs text-muted-foreground">Uang Kembali 100%</p>
            </div>
          </div>
        </div>

        <Card className="p-8 shadow-xl">
          {/* embedRef only contains the form scaffold; scripts are loaded dynamically */}
          <div ref={embedRef} />
        </Card>

        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-accent/20 border border-accent/30 rounded-full">
            <Shield className="w-5 h-5 text-accent-foreground" />
            <p className="text-sm font-bold text-accent-foreground">
              Garansi Uang Kembali 100% dalam 7 Hari - Tanpa Pertanyaan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrderFormSection
