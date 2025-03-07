import { Component, Renderer2 } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-wpp',
  standalone: true,
  imports: [NzButtonModule, NzIconModule],
  templateUrl: './wpp.component.html',
  styleUrl: './wpp.component.css'
})
export class WppComponent {

  constructor(private renderer: Renderer2) { }
  
  redirectToWhatsApp(): void {
    const phoneNumber = '5930983875666'; // Reemplaza con el número de WhatsApp (código de país + número)
    const message = encodeURIComponent('¡Hola! Me gustaría obtener más información.'); // Mensaje inicial
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank'); // Abre WhatsApp en una nueva pestaña
  }

  ngAfterViewInit(): void {
    this.loadVoiceflowChatbot();
  }

  loadVoiceflowChatbot(): void {
    const script = this.renderer.createElement('script');
    script.src = 'https://cdn.voiceflow.com/widget/bundle.mjs';
    script.type = 'text/javascript';
    script.onload = () => {
      (window as any).voiceflow?.chat.load({
        verify: { projectID: '67153dbdfb911cff2f08be8a' },
        url: 'https://general-runtime.voiceflow.com',
        versionID: 'production'
      });
    };

    document.body.appendChild(script);
  }

}
