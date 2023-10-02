<?php
  
namespace App\Http\Controllers;
  
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Mail;
use App\Mail\DemoMail;
use App\Mail\orderConfirmation;
use App\Models\User;
use Symfony\Component\Mime\Part\TextPart;
use Symfony\Component\Mime\Part\File;
  
class MailController extends Controller
{
    /**
     * Write code on Method
     *
     * @return response()
     */

    public function sendConfirmationEmail(Request $request)
    {
       
        $adminMail = 'noxcr.mailing@gmail.com';


    $user = Auth::user();

    //Validar Data

    $itemList = "";
    // foreach ($request->cart as $item)
    // {
        
    //     itemlist .= $item->product->name . " ";
    //     itemlist .= $item->quantity . " ";
    //     itemlist .= $item->product->price . " ";
    //     itemlist .= "</br>";
    // }

        
       $orderData= [
                'order_id'=> $request->order_id, 
                'name' => $request->name, 
                'cedula' => $request->cedula,
                'address' => $request->address,
                'products' => $itemList,
                'total_amount' => $request->total_amount, 
                'shipping_type' => $request->shipping_type,
                'data' => $request->cart
                      
            ];

            Mail::to($user->email)
                    ->cc($adminMail)
                    ->send(new orderConfirmation($orderData));

    }

}